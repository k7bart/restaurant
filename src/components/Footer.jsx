import Logo from "./Logo";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const linkStyle = {
    opasity: "0.5",
};

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <Logo />

                <Link
                    to="https://www.instagram.com/catherine_pastry/"
                    target="_blank"
                    className="link"
                >
                    <FaInstagram />
                    @nique.
                </Link>
                <Link to="" target="_blank" className="link">
                    <FaFacebook />
                    nique.
                </Link>

                <p>By Kateryna Bartienieva</p>
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
