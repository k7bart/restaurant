import { Link } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./LinkComponent.module.scss";

type Props = {
    children: React.ReactNode;
    color?: "grey" | "white" | "wisteria";
    fontWeight?: "thin" | "extraLight";
    target?: string;
    to: string;
    size?: "medium" | "large";
};

const LinkComponent = ({
    children,
    color = "grey",
    fontWeight = "extraLight",
    target = "_self",
    to,
    size = "medium",
}: Props) => {
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
    color: PropTypes.oneOf(["grey", "white", "wisteria"]),
    fontWeight: PropTypes.oneOf(["thin", "extraLight"]),
    target: PropTypes.string,
    to: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["medium", "large"]),
};

export default LinkComponent;
