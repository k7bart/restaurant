import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
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

const NavBar = () => {
    const user = useSelector((state) => state.user);

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
