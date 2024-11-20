import PropTypes from "prop-types";

import CoverTitles from "../cover-titles/CoverTitles";

import styles from "./Cover.module.scss";

function Cover({ addFilter, backgroundImage, subtitle, title, text }) {
    return (
        <div className={styles.cover}>
            <div
                className={styles.image}
                data-testid="image"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            {addFilter && <div className={styles.filter}></div>}

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
