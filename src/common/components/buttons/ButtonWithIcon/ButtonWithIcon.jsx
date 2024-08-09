import classNames from "classnames";
import styles from "./ButtonWithIcon.module.scss";

const ButtonWithIcon = ({ className = undefined, icon, onClick }) => {
    return (
        <button
            className={classNames(styles.withIcon, className)}
            onClick={onClick}
        >
            {icon}
        </button>
    );
};

export default ButtonWithIcon;
