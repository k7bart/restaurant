import classNames from "classnames";
import styles from "./Text.module.scss";

const Text = ({
    align = "left",
    color = "grey",
    children,
    className = undefined,
    size = "small",
}) => {
    return (
        <span
            className={classNames(
                styles.text,
                styles[align],
                styles[size],
                styles[color],
                className
            )}
        >
            {children}
        </span>
    );
};

export default Text;
