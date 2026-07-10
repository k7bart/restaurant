import { type ReactNode } from "react";
import cn from "classnames";
import styles from "./ContentSectionNav.module.scss";

type Props = {
    children: ReactNode;
    className?: string;
};

const ContentSectionNav = ({ children, className }: Props) => (
    <nav className={cn(styles.nav, className)}>{children}</nav>
);

export default ContentSectionNav;
