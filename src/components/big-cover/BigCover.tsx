import { Helmet } from "react-helmet";
import CoverFilter from "../cover-filter/CoverFilter";
import CoverImage from "../cover-image/CoverImage";
import CursiveSubtitle from "../cover-titles/cursive-subtitle/CursiveSubtitle";
import Title from "../cover-titles/title/Title";
import Logo from "../logo/Logo";
import NavBar from "../nav-bar/NavBar";
import Text from "../text/Text";
import coverStyles from "../half-page-cover/Cover.module.scss";
import styles from "./BigCover.module.scss";

type Props = {
    helmet: string;
    imageUrl: string;
    subtitle: string;
    text?: string;
    title: string;
};

const BigCover = ({ imageUrl, helmet, subtitle, title, text }: Props) => (
    <div className={styles.bigCover}>
        <Helmet>
            <title>{helmet}</title>
        </Helmet>

        <Logo additionalStyles={styles.logo} />

        <div className={coverStyles.cover}>
            <CoverImage
                additionalStyles={coverStyles.image}
                imageUrl={imageUrl}
            />
            <CoverFilter />

            <div className={styles.titles}>
                <CursiveSubtitle
                    additionalStyles={styles.cursiveSubtitle}
                    text={subtitle}
                />

                <Title additionalStyles={styles.title} text={title} />

                {text && (
                    <Text
                        align="center"
                        color="white"
                        className={styles.text}
                        fontWeight="extraLight"
                    >
                        {text}
                    </Text>
                )}
            </div>
        </div>

        <NavBar additionalStyles={styles.navbar} />
    </div>
);

export default BigCover;
