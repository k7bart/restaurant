import { Link, useLocation } from "react-router-dom";
import "./NavBar.scss";

const pages = [
    { link: "/menu", text: "Menu" },
    { link: "/reservation", text: "Book a table" },
    { link: "/events", text: "Events" },
];

const NavBar = () => {
    const location = useLocation().pathname;

    return (
        <nav className="navbar">
            {pages.map((page) => (
                <Link key={page.link} to={page.link}>
                    <button
                        className={`button ${
                            location === page.link ? "active" : ""
                        }`}
                    >
                        {page.text}
                    </button>
                </Link>
            ))}
        </nav>
    );
};

export default NavBar;
