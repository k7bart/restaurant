import Cover from "../../Cover/Cover";
import image from "../../../assets/restaurant.jpeg";
import "./FrontPage.scss";

function FrontPage() {
    const props = {
        subtitle: "The pure taste of",
        title: "Sweet life",
        backgroundImage: image,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    };

    return (
        <div className="front-page">
            <Cover {...props} />
        </div>
    );
}

export default FrontPage;
