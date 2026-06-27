import PropTypes from "prop-types";

import CoverImage from "../cover-image/CoverImage";
import CoverFilter from "../cover-filter/CoverFilter";
import CoverTitles from "../cover-titles/CoverTitles";

import styles from "./Cover.module.scss";

function Cover({ addFilter, backgroundImage, subtitle, title, text }) {
    return (
        <div className={styles.cover}>
            <CoverImage
                additionalStyles={styles.image}
                imageUrl={backgroundImage}
            />

            {addFilter && <CoverFilter additionalStyles={styles.filter} />}

            <CoverTitles title={title} subtitle={subtitle} text={text} />
        </div>
    );
}

Cover.propTypes = {
    addFilter: PropTypes.bool,
    backgroundImage: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
};

Cover.defaultProps = {
    addFilter: true,
};

export default Cover;
