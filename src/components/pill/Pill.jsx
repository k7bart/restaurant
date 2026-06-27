import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./Pill.module.scss";

const Pill = ({ active, color = "wisteria", children, onClick }) => {
    return (
        <button
            className={cn(styles.pill, styles[color], {
                [styles.active]: active,
            })}
            type="button"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Pill.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(["green", "wisteria"]),
    onClick: PropTypes.func.isRequired,
};

export default Pill;
