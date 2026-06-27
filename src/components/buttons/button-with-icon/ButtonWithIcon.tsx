import { type ReactNode, type MouseEvent } from "react";
import classNames from "classnames";

import styles from "./ButtonWithIcon.module.scss";

type Props = {
    className?: string;
    icon: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    ariaLabel?: string;
    title?: string;
};

const ButtonWithIcon = ({
    className,
    icon,
    onClick,
    type = "button",
    disabled = false,
    ariaLabel,
    title,
}: Props) => (
    <button
        className={classNames(styles.withIcon, className)}
        onClick={onClick}
        type={type}
        disabled={disabled}
        aria-label={ariaLabel}
        title={title}
    >
        {icon}
    </button>
);

export default ButtonWithIcon;
