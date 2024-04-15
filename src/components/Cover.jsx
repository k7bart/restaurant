import Logo from "./Logo";
import NavBar from "./NavBar";

function Cover({ subtitle, title }) {
    return (
        <div className="section cover">
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
