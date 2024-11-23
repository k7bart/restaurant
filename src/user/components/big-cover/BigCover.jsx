import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import styles from "./BigCover.module.scss";
import coverStyles from "../half-page-cover/Cover.module.scss";
import CoverImage from "../cover-image/CoverImage";
import CoverFilter from "../cover-filter/CoverFilter";
import CursiveSubtitle from "../cover-titles/cursive-subtitle/CursiveSubtitle";
import Logo from "../../../common/components/Logo/Logo";
import NavBar from "../NavBar/NavBar";
import Text from "../Text/Text";
import Title from "../cover-titles/title/Title";

function BigCover({ imageUrl, helmet, subtitle, title, text }) {
    return (
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
}
BigCover.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    helmet: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
};

export default BigCover;
