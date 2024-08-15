import classNames from "classnames";
import styles from "./LinkComponent.module.scss";
import { Link } from "react-router-dom";

const LinkComponent = ({
    children,
    color = "grey",
    target = "_self",
    to,
    size,
}) => {
    return (
        <Link
            className={classNames(styles.link, styles[size], styles[color])}
            target={target}
            to={to}
        >
            {children}
        </Link>
    );
};

export default LinkComponent;
