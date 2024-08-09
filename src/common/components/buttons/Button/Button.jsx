import styles from "./Button.module.scss";

const Button = ({
    size = "small",
    color = "wisteria",
    type = undefined,
    children,
    onClick,
}) => {
    const buttonClass = `${styles.button} ${styles[size]} ${styles[color]}`;

    return (
        <button className={buttonClass} onClick={onClick} type={type}>
            {children}
        </button>
    );
};

export default Button;
