import Logo from "../Logo/Logo";
import { Link, NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <Logo />

                <Link to="" target="_blank" className="link">
                    <FaInstagram />
                    @b.art
                </Link>
                <Link to="" target="_blank" className="link">
                    <FaFacebook />
                    b.art
                </Link>
                <Link
                    to="https://www.linkedin.com/in/kateryna-bartienieva/"
                    target="_blank"
                    className="link"
                >
                    By Kateryna Bartienieva
                </Link>
            </div>
            <div className="container">
                <NavLink to="/menu" className="link">
                    Menu
                </NavLink>
                <NavLink to="/reservation" className="link">
                    Reservation
                </NavLink>
                <NavLink to="/events" className="link">
                    Events
                </NavLink>
            </div>
            <div>
                <NavLink to="/error" className="link">
                    Error
                </NavLink>
            </div>
        </div>
    );
};

export default Footer;
