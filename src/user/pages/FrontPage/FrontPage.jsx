import { Helmet } from "react-helmet";
import Logo from "../../../common/components/Logo/Logo";
import NavBar from "../../components/NavBar/NavBar";
import Cover from "../../components/cover/Cover";

function FrontPage() {
    const props = {
        subtitle: "The pure taste of",
        title: "Sweet life",
        backgroundImage:
            "https://ik.imagekit.io/k7bart/restaurant/covers/restaurant.webp?updatedAt=1720591678414",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    };

    return (
        <div className="front-page">
            <Helmet>
                <title>b.art</title>
            </Helmet>
            <Logo />
            <Cover {...props} />
            <NavBar />
        </div>
    );
}

export default FrontPage;
