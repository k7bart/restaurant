import { Link } from "react-router-dom";
import "./Logo.scss";

function Logo() {
    return (
        <Link to="/" className="logo">
            b.art
        </Link>
    );
}

export default Logo;
