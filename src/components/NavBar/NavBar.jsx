import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { links } from "../../state";
import CartLink from "./CartLink";
import ProfileLink from "./ProfileLink";
import "./NavBar.scss";

const NavBar = () => {
    const user = useSelector((state) => state.user);

    const navLinks = links.map((link, i) => (
        <NavLink key={i} to={link.to}>
            {link.text}
        </NavLink>
    ));

    return (
        <nav className="navbar">
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

export default NavBar;
