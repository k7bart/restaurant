import Logo from "./Logo";
import { Link } from "react-router-dom";

const linkStyle = {
    opasity: "0.5",
};

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <Logo />
            </div>
            <div className="footer__link-container">
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
