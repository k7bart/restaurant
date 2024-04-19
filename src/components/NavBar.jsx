import { Link } from "react-router-dom";

function Button({ text }) {
    return <button className="button">{text}</button>;
}

function NavBar() {
    return (
        <>
            <nav className="navbar">
                <Link to="/reservation">
                    <Button text="Book a table" />
                </Link>
                <Link to="/menu">
                    <Button text="Menu" />
                </Link>
                <Link to="/events">
                    <Button text="Events" />
                </Link>
                <Link>
                    <Button text="Classes" />
                </Link>
            </nav>
        </>
    );
}

export default NavBar;
