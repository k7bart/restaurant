import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import "./Cover.scss";

function Cover({ subtitle, title, backgroundImage }) {
    return (
        <div className="section">
            <div className="cover-container">
                <div
                    className="cover"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <div className="filter"></div>
                    <div className="content">
                        <Logo />
                        <div className="titles-container">
                            <h2 className="subtitle">{subtitle}</h2>
                            <h1 className="title">{title}</h1>
                        </div>
                        <NavBar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cover;
