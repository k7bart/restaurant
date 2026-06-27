import cn from "classnames";
import { ReactNode } from "react";
import styles from "./Text.module.scss";

type TextAlign = "left" | "center";
type TextColor = "grey" | "wisteria" | "white";
type TextFontWeight = "thin" | "extraLight";
type TextSize = "small" | "medium" | "large";

type TextProps = {
    align?: TextAlign;
    color?: TextColor;
    children?: ReactNode;
    className?: string;
    fontWeight?: TextFontWeight;
    size?: TextSize;
};

const Text = ({
    align = "left",
    color = "grey",
    children,
    className,
    fontWeight = "thin",
    size = "small",
}: TextProps) => (
    <span
        className={cn(
            styles.text,
            styles[align],
            styles[color],
            styles[fontWeight],
            styles[size],
            className,
        )}
    >
        {children}
    </span>
);

export default Text;
