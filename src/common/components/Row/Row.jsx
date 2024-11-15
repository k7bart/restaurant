import classNames from "classnames";
import styles from "./Row.module.scss";

const Row = ({ children, className = undefined, onClick = undefined }) => {
    return (
        <div className={classNames(styles.row, className)} onClick={onClick}>
            {children}
        </div>
    );
};

export default Row;
