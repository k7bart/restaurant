import { type ReactNode } from "react";
import cn from "classnames";
import styles from "./Section.module.scss";

type Props = {
    children: ReactNode;
    className?: string;
};

const Section = ({ children, className }: Props) => (
    <section className={cn(styles.section, className)}>{children}</section>
);

export default Section;
