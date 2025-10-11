import PropTypes from "prop-types";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./NavLinkComponent.module.scss";

const NavLinkComponent = ({ children, target, to }) => {
    return (
        <NavLink
            className={({ isActive }) =>
                classNames({
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

NavLinkComponent.propTypes = {
    children: PropTypes.node.isRequired,
    target: PropTypes.string,
    to: PropTypes.string.isRequired,
};

NavLinkComponent.defaultProps = {
    target: "_self",
};

export default NavLinkComponent;
