import CoverFilter from "../cover-filter/CoverFilter";
import CoverImage from "../cover-image/CoverImage";
import CoverTitles from "../cover-titles/CoverTitles";
import styles from "./Cover.module.scss";

type Props = {
    addFilter?: boolean;
    backgroundImage: string;
    subtitle?: string;
    text?: string;
    title?: string;
};

const Cover = ({
    addFilter = true,
    backgroundImage,
    subtitle,
    title,
    text,
}: Props) => (
    <div className={styles.cover}>
        <CoverImage
            additionalStyles={styles.image}
            imageUrl={backgroundImage}
        />

        {addFilter && <CoverFilter additionalStyles={styles.filter} />}

        <CoverTitles
            title={title ?? ""}
            subtitle={subtitle ?? ""}
            text={text}
        />
    </div>
);

export default Cover;
