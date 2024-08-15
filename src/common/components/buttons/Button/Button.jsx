import classNames from "classnames";
import styles from "./Button.module.scss";

const Button = ({
    size = "small",
    color = "wisteria",
    type = undefined,
    children,
    onClick,
}) => {
    return (
        <button
            className={classNames(styles.button, styles[size], styles[color])}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
