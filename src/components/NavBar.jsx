import { Routes, Route, Link } from "react-router-dom";
import ReservationPage from "./Reservation/ReservationPage";
import MenuPage from "./Menu/MenuPage";

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
                <Link>
                    <Button text="Restaurant" />
                </Link>
                <Link>
                    <Button text="Classes" />
                </Link>
            </nav>
            <Routes>
                <Route path="/" />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/reservation" element={<ReservationPage />} />
            </Routes>
        </>
    );
}

export default NavBar;
