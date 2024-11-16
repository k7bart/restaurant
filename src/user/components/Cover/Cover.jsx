import CoverTitles from "../cover-titles/CoverTitles";

function Cover({ subtitle, title, backgroundImage, text }) {
    return (
        <div className="cover">
            <div
                className="image"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
            <div className="filter"></div>
            <div className="content">
                <CoverTitles title={title} subtitle={subtitle} text={text} />
            </div>
        </div>
    );
}

export default Cover;
