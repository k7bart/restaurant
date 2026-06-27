import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./CustomLink.module.scss";

type Props = {
    children: React.ReactNode;
    color?: "grey" | "white" | "wisteria";
    fontWeight?: "thin" | "extraLight";
    target?: string;
    to: string;
    size?: "medium" | "large";
};

const CustomLink = ({
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
                styles[fontWeight],
            )}
            target={target}
            to={to}
        >
            {children}
        </Link>
    );
};

export default CustomLink;
