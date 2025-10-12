import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./NavLinkComponent.module.scss";

const NavLinkComponent = forwardRef(
    ({ children, to, target = "_self" }, ref) => (
        <NavLink
            className={({ isActive }) => classNames(isActive && styles.active)}
            ref={ref}
            target={target}
            to={to}
        >
            {children}
        </NavLink>
    )
);

NavLinkComponent.displayName = "NavLinkComponent";

NavLinkComponent.propTypes = {
    children: PropTypes.node.isRequired,
    target: PropTypes.string,
    to: PropTypes.string.isRequired,
};

export default NavLinkComponent;
