import classNames from "classnames";
import styles from "./CoverImage.module.scss";
import PropTypes from "prop-types";

const CoverImage = ({ additionalStyles, imageUrl }) => {
    return (
        <div
            className={classNames(styles.image, additionalStyles)}
            data-testid="image"
            style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
    );
};

CoverImage.propTypes = {
    additionalStyles: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
};

export default CoverImage;
