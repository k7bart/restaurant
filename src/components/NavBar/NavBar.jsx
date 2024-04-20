import { Link } from "react-router-dom";
import "./NavBar.scss";

function Button({ text }) {
    return <button className="button">{text}</button>;
}

function NavBar() {
    return (
        <>
            <nav className="navbar">
                <Link to="/menu">
                    <Button text="Menu" />
                </Link>
                <Link to="/reservation">
                    <Button text="Book a table" />
                </Link>
                <Link to="/events">
                    <Button text="Events" />
                </Link>
            </nav>
        </>
    );
}

export default NavBar;
