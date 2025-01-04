import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const Button = ({
    size = "small",
    color = "wisteria",
    isActive = true,
    type = undefined,
    children,
    onClick,
    additionalStyles,
}) => {
    return (
        <button
            className={classNames(
                additionalStyles,
                styles.button,
                styles[size],
                styles[color],
                !isActive && styles.inactive
            )}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    isActive: PropTypes.bool,
    type: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
    additionalStyles: PropTypes.string,
};

Button.defaultProps = {
    size: "small",
    color: "wisteria",
    type: "button",
};

export default Button;
