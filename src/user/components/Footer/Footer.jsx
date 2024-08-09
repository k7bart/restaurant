import Logo from "../../../common/components/Logo/Logo";
import { Link, NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const links = [
    { to: "/login", text: "Login" },
    { to: "/registration", text: "Register" },
    { to: "/profile", text: "Profile" },
    { to: "/menu", text: "Menu" },
    { to: "/table-reservation", text: "Book a table" },
    { to: "/events", text: "Events" },
    { to: "/cart", text: "Cart" },
    { to: "/admin", text: "Admin" },
    { to: "/error", text: "Error" },
];

const navLinks = links.map(({ to, text }) => (
    <NavLink to={to} className="link" key={to}>
        {text}
    </NavLink>
));

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <Logo />

                <a href="tel:+380630000000" className="link">
                    <FaPhone />
                    {"+380 (63) 00 00 000"}
                </a>
                <a href="mailto:b.art@gmail.com" className="link">
                    <IoMail />
                    b.art@gmail.com
                </a>

                <Link
                    to="https://www.linkedin.com/in/kateryna-bartienieva/"
                    target="_blank"
                    className="link"
                >
                    By Kateryna Bartienieva
                </Link>
            </div>

            <div className="container">{navLinks}</div>

            <div>
                <Link
                    to="https://www.instagram.com"
                    target="_blank"
                    className="link"
                >
                    <FaInstagram />
                    @b.art
                </Link>
                <Link
                    to="https://www.facebook.com"
                    target="_blank"
                    className="link"
                >
                    <FaFacebook />
                    b.art
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
