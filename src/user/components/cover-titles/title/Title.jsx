import PropTypes from "prop-types";
import styles from "./Title.module.scss";
import classNames from "classnames";

const Title = ({ additionalStyles, text }) => {
    return (
        <h1 className={classNames(styles.title, additionalStyles)}>{text}</h1>
    );
};

Title.propTypes = {
    additionalStyles: PropTypes.string,
    text: PropTypes.string.isRequired,
};

Title.defaultProps = {
    additionalStyles: undefined,
};

export default Title;
