import PropTypes from "prop-types";
import styles from "./CursiveSubtitle.module.scss";

const CursiveSubtitle = ({ text }) => {
    return <h2 className={styles.cursiveSubtitle}>{text}</h2>;
};

CursiveSubtitle.propTypes = {
    text: PropTypes.string.isRequired,
};

export default CursiveSubtitle;
