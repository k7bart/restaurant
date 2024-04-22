import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const pages = [
    { link: "/menu", text: "Menu" },
    { link: "/reservation", text: "Book a table" },
    { link: "/events", text: "Events" },
];

const NavBar = () => {
    return (
        <nav className="navbar">
            {pages.map((page) => (
                <NavLink key={page.link} to={page.link}>
                    {page.text}
                </NavLink>
            ))}
        </nav>
    );
};

export default NavBar;
