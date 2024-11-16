import CursiveSubtitle from "../cursive-subtitle/CursiveSubtitle";
import Title from "../title/Title";

function Cover({ subtitle, title, backgroundImage, text }) {
    return (
        <div className="cover">
            <div
                className="image"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
            <div className="filter"></div>
            <div className="content">
                <div className="titles-container">
                    <CursiveSubtitle text={subtitle} />
                    <Title text={title} />
                    {text && <p className="large">{text}</p>}
                </div>
            </div>
        </div>
    );
}

export default Cover;
