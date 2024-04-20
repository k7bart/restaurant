import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./Footer.scss";

const linkStyle = {
    opasity: "0.5",
};

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
                <Link to="/menu" className="link" style={linkStyle}>
                    Menu
                </Link>
                <Link to="/reservation" style={linkStyle} className="link">
                    Reservation
                </Link>
            </div>
            <div>
                <Link to="/error" className="link" style={linkStyle}>
                    Error
                </Link>
            </div>
        </div>
    );
};

export default Footer;
