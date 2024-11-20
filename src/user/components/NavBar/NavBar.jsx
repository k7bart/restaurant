import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames";
import PropTypes from "prop-types";

import CartLink from "./CartLink";
import ProfileLink from "./ProfileLink";

const links = [
    { to: "/menu", text: "Menu" },
    { to: "/table-reservation", text: "Book a table" },
    { to: "/events", text: "Events" },
];

const navLinks = links.map((link, i) => (
    <NavLink key={i} to={link.to}>
        {link.text}
    </NavLink>
));

const NavBar = ({ additionalStyles }) => {
    const user = useSelector((state) => state.user);

    return (
        <nav
            className={classNames(additionalStyles, "navbar")}
            data-testid="navbar"
        >
            {user ? (
                <ProfileLink name={user.name} />
            ) : (
                <NavLink to="/login">Login</NavLink>
            )}
            {navLinks}
            <CartLink />
        </nav>
    );
};
NavBar.propTypes = {
    additionalStyles: PropTypes.string,
};

NavBar.defaultProps = {
    additionalStyles: undefined,
};

export default NavBar;
