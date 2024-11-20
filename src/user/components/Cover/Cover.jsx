import PropTypes from "prop-types";

import CoverTitles from "../cover-titles/CoverTitles";

import styles from "./Cover.module.scss";

function Cover({ subtitle, title, backgroundImage, text }) {
    return (
        <div className={styles.cover}>
            <div
                className={styles.image}
                data-testid="image"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            <div className={styles.filter}></div>

            <CoverTitles title={title} subtitle={subtitle} text={text} />
        </div>
    );
}

Cover.propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string,
    backgroundImage: PropTypes.string.isRequired,
    text: PropTypes.string,
};

export default Cover;
