import Logo from "../Logo";
import NavBar from "../NavBar";
import "./HomePage.scss";

function FrontPage() {
    return (
        <div className="home dark-filter">
            <Logo />
            <div>
                <h2>The pure taste of</h2>
                <h1>Sweet life</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                </p>
            </div>
            <NavBar />
        </div>
    );
}

export default FrontPage;
