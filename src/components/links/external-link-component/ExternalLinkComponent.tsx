import cn from "classnames";
import { ReactNode } from "react";
import styles from "./ExternalLinkComponent.module.scss";

type LinkColor = "grey" | "white" | "wisteria";
type LinkSize = "thin" | "extraLight" | "medium" | "large";

type Props = {
    children: ReactNode;
    color?: LinkColor;
    href: string;
    size?: LinkSize;
    target?: string;
};

const ExternalLinkComponent = ({
    children,
    color = "grey",
    target = "_blank",
    href,
    size,
}: Props) => (
    <a
        className={cn(styles.link, size && styles[size], styles[color])}
        target={target}
        href={href}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
        {children}
    </a>
);

export default ExternalLinkComponent;
