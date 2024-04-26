import useWindowWidth from "../../hooks/useWindowWidth";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import "./Cover.scss";

function Cover({ subtitle, title, backgroundImage }) {
    const windowWidth = useWindowWidth();

    const logo = windowWidth > 820 && <Logo />;
    const navbar = windowWidth > 820 && <NavBar />;

    return (
        <div className="section">
            <div className="cover-container">
                <div
                    className="cover"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <div className="filter"></div>
                    <div className="content">
                        {logo}
                        <div className="titles-container">
                            <h2 className="subtitle">{subtitle}</h2>
                            <h1 className="title">{title}</h1>
                        </div>
                        {navbar}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cover;
