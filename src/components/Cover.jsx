import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";

function Cover({ subtitle, title, backgroundImage }) {
    return (
        <div
            className="section cover"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <Logo />
            <div className="titles-container">
                <h2 className="subtitle">{subtitle}</h2>
                <h1 className="title">{title}</h1>
            </div>

            <NavBar />
        </div>
    );
}

export default Cover;
