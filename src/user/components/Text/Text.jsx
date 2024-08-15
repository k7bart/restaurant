import classNames from "classnames";
import styles from "./Text.module.scss";

const Text = ({ align = "left", color = "grey", children, size = "small" }) => {
    return (
        <span
            className={classNames(
                styles.text,
                styles[align],
                styles[size],
                styles[color]
            )}
        >
            {children}
        </span>
    );
};

export default Text;
