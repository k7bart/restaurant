import cn from "classnames";
import { MouseEventHandler, ReactNode } from "react";
import styles from "./Row.module.scss";

type Props = {
    additionalStyles?: string;
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLDivElement>;
};

const Row = ({ additionalStyles, children, onClick }: Props) => (
    <div className={cn(styles.row, additionalStyles)} onClick={onClick}>
        {children}
    </div>
);

export default Row;
