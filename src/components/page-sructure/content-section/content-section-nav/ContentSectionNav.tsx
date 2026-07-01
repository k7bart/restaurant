import { type ReactNode } from "react";
import cn from "classnames";
import styles from "./ContentSectionNav.module.scss";

type Props = {
    children: ReactNode;
    justifyContent?: "contentEvenly" | "contentRight";
};

const ContentSectionNav = ({ children, justifyContent }: Props) => (
    <nav className={cn(styles.nav, justifyContent && styles[justifyContent])}>
        {children}
    </nav>
);

export default ContentSectionNav;
