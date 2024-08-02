import styles from "./Button.module.scss";

const Button = ({ size, color, text, onClick }) => {
    const buttonClass = `${styles.button} ${styles[size]} ${styles[color]}`;

    return (
        <button className={buttonClass} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
