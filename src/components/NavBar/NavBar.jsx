import { NavLink } from "react-router-dom";
import { links } from "../../state";
import CartLink from "./CartLink";
import "./NavBar.scss";

const NavBar = () => {
    const navLinks = links.map((link, i) => (
        <NavLink key={i} to={link.to}>
            {link.text}
        </NavLink>
    ));

    return (
        <nav className="navbar">
            {navLinks}
            <CartLink />
        </nav>
    );
};

export default NavBar;
