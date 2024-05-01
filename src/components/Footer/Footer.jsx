import Logo from "../Logo/Logo";
import { links } from "../../state";
import { Link, NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import "./Footer.scss";

const Footer = () => {
    const navLinks = links.map((link, i) => (
        <NavLink to={link.to} className="link" key={i}>
            {link.text}
        </NavLink>
    ));

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
                {/* <NavLink to="/error" className="link">
                    Error
                </NavLink> */}
            </div>
        </footer>
    );
};

export default Footer;
