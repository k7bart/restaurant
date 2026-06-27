import { type ReactNode } from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

type Props = {
    size?: "small" | "large" | "full";
    color?: "wisteria" | "transparent";
    isActive?: boolean;
    type?: "button" | "submit" | "reset";
    children: ReactNode;
    onClick?: () => void;
    additionalStyles?: string;
};

const Button = ({
    size = "small",
    color = "wisteria",
    isActive = true,
    type = "button",
    children,
    onClick,
    additionalStyles,
}: Props) => {
    return (
        <button
            className={cn(
                additionalStyles,
                styles.button,
                styles[size],
                styles[color],
                !isActive && styles.inactive
            )}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
