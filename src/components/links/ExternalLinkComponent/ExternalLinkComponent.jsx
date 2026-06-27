import classNames from "classnames";
import styles from "./ExternalLinkComponent.module.scss";

const ExternalLinkComponent = ({
    children,
    color = "grey",
    target = "_blank",
    href,
    size,
}) => {
    return (
        <a
            className={classNames(styles.link, styles[size], styles[color])}
            target={target}
            href={href}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
        >
            {children}
        </a>
    );
};

export default ExternalLinkComponent;
