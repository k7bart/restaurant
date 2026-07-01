import cn from "classnames";
import { ReactNode } from "react";
import styles from "./Icon.module.scss";

type Props = {
    additionalStyles?: string;
    children: ReactNode;
};

const Icon = ({ additionalStyles, children }: Props) => (
    <div className={cn(styles.icon, additionalStyles)}>{children}</div>
);

export default Icon;
