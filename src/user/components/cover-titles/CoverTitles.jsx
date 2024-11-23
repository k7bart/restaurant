import PropTypes from "prop-types";
import CursiveSubtitle from "./cursive-subtitle/CursiveSubtitle";
import Text from "../Text/Text";
import Title from "./title/Title";
import styles from "./CoverTitles.module.scss";

const CoverTitles = ({ title, subtitle, text }) => {
    return (
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
};

CoverTitles.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string,
};

export default CoverTitles;
