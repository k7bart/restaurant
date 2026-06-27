import CursiveSubtitle from "./cursive-subtitle/CursiveSubtitle";
import Text from "../text/Text";
import Title from "./title/Title";
import styles from "./CoverTitles.module.scss";

type Props = {
    subtitle: string;
    text?: string;
    title: string;
};

const CoverTitles = ({ title, subtitle, text }: Props) => (
    <div className={styles.titles}>
        <CursiveSubtitle text={subtitle} />
        <Title text={title} />
        {text && (
            <Text color="white" size="large">
                {text}
            </Text>
        )}
    </div>
);

export default CoverTitles;
