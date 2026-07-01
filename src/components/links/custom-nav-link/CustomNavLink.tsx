import { forwardRef, type ReactNode } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./CustomNavLink.module.scss";

type Props = {
    children: ReactNode;
    target?: string;
    to: string;
};

const CustomNavLink = forwardRef<HTMLAnchorElement, Props>(
    ({ children, to, target = "_self" }, ref) => (
        <NavLink
            className={({ isActive }) =>
                cn(styles.link, styles.grey, isActive && styles.active)
            }
            ref={ref}
            target={target}
            to={to}
        >
            {children}
        </NavLink>
    ),
);

CustomNavLink.displayName = "CustomNavLink";

export default CustomNavLink;
