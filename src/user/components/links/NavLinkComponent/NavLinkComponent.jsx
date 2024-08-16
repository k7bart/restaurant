import classNames from "classnames";
import styles from "./NavLinkComponent.module.scss";
import { NavLink } from "react-router-dom";

const NavLinkComponent = ({
    children,
    color = "grey",
    target = "_self",
    to,
    size,
}) => {
    return (
        <NavLink
            className={({ isActive }) =>
                classNames(styles.link, styles[size], styles[color], {
                    [styles.active]: isActive,
                })
            }
            target={target}
            to={to}
        >
            {children}
        </NavLink>
    );
};

export default NavLinkComponent;
