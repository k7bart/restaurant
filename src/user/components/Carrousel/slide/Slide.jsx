import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Slide.module.scss";

const Slide = ({ customStyles, slideContent }) => {
    return (
        <div className={classNames(customStyles, styles.slide)}>
            {slideContent}
        </div>
    );
};

Slide.propTypes = {
    customStyles: PropTypes.object,
    slideContent: PropTypes.string.isRequired,
};

Slide.defaultProps = {
    customStyles: undefined,
};

export default Slide;
