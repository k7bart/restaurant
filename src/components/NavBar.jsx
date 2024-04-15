import Button from "./Button";

import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/reservation">
                <Button text="Book a table" />
            </Link>
            <Link to="/menu">
                <Button text="Menu" />
            </Link>
            <Link>
                <Button text="Restaurant" />
            </Link>
            <Link>
                <Button text="Classes" />
            </Link>
        </nav>
    );
}

export default NavBar;
