import Button from "./Button";

function NavBar() {
    return (
        <div className="navbar">
            <Button text="Menu" />
            <Button text="Restaurant" />
            <Button text="Classes" />
            <Button text="Book a table" />
        </div>
    );
}

export default NavBar;
