import { Helmet } from "react-helmet";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import Cover from "../Cover/Cover";

const ErrorPage = () => {
    const props = {
        subtitle: "Oops!",
        title: "404",
        backgroundImage:
            "https://ik.imagekit.io/k7bart/restaurant/covers/cheesecake-oreo.webp?updatedAt=1722077728528",
        text: "We couldn't find the page you were looking for. Maybe it's hiding in the kitchen. In the meantime, why not check out our menu?",
    };
    return (
        <div className="front-page">
            <Helmet>
                <title>Error</title>
            </Helmet>
            <Logo />
            <Cover {...props} />
            <NavBar />
        </div>
    );
};

export default ErrorPage;
