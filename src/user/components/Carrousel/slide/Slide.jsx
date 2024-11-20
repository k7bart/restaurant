import PropTypes from "prop-types";
import styles from "./Slide.module.scss";

const Slide = ({ slideContent }) => {
    return <div className={styles.slide}>{slideContent}</div>;
};

Slide.propTypes = {
    slideContent: PropTypes.object.isRequired,
};

export default Slide;
