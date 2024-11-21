import classNames from "classnames";
import styles from "./LinkComponent.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LinkComponent = ({ children, color, fontWeight, target, to, size }) => {
    return (
        <Link
            className={classNames(
                styles.link,
                styles[size],
                styles[color],
                styles[fontWeight]
            )}
            target={target}
            to={to}
        >
            {children}
        </Link>
    );
};

LinkComponent.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    fontWeight: PropTypes.string,
    target: PropTypes.string,
    to: PropTypes.string.isRequired,
    size: PropTypes.string,
};

LinkComponent.defaultProps = {
    color: "grey",
    fontWeight: "extraLight",
    target: "_self",
    size: "medium",
};

export default LinkComponent;
