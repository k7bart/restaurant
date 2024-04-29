import "./Cover.scss";

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
                    <h2 className="subtitle">{subtitle}</h2>
                    <h1 className="title">{title}</h1>
                    {text && <p>{text}</p>}
                </div>
            </div>
        </div>
    );
}

export default Cover;
