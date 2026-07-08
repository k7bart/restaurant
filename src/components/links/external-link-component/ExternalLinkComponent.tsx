import cn from "classnames";
import { ReactNode } from "react";
import styles from "./ExternalLinkComponent.module.scss";

type LinkColor = "grey" | "white" | "wisteria";
type LinkFontWeight = "thin" | "extraLight";
type LinkSize = "medium" | "large";

type Props = {
    children: ReactNode;
    color?: LinkColor;
    fontWeight?: LinkFontWeight;
    href: string;
    size?: LinkSize;
    target?: string;
};

const ExternalLinkComponent = ({
    children,
    color = "grey",
    fontWeight = "extraLight",
    target = "_blank",
    href,
    size = "medium",
}: Props) => (
    <a
        className={cn(
            styles.link,
            styles[size],
            styles[color],
            styles[fontWeight],
        )}
        target={target}
        href={href}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
        {children}
    </a>
);

export default ExternalLinkComponent;
