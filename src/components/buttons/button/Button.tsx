import { type ReactNode } from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

type Props = {
    size?: "small" | "large" | "full";
    color?: "primary" | "secondary" | "tertiary";
    isActive?: boolean;
    type?: "button" | "submit" | "reset";
    children: ReactNode;
    onClick?: () => void;
    className?: string;
};

const Button = ({
    size = "small",
    color = "primary",
    isActive = true,
    type = "button",
    children,
    onClick,
    className,
}: Props) => {
    return (
        <button
            className={cn(
                className,
                styles.button,
                styles[size],
                styles[color],
                !isActive && styles.tertiary,
            )}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
