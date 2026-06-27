import { type MouseEventHandler, type ReactNode } from "react";
import cn from "classnames";
import styles from "./Pill.module.scss";

type Props = {
    active?: boolean;
    children: ReactNode;
    color?: "green" | "wisteria";
    onClick: MouseEventHandler<HTMLButtonElement>;
};

const Pill = ({ active, color = "wisteria", children, onClick }: Props) => (
    <button
        className={cn(styles.pill, styles[color], {
            [styles.active]: active,
        })}
        type="button"
        onClick={onClick}
    >
        {children}
    </button>
);

export default Pill;
