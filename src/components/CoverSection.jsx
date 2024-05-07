import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";

const CoverSection = ({ cover, addLogo, addNavBar }) => {
    return (
        <section className="cover">
            {addLogo && <Logo />}
            {cover}
            {addNavBar && <NavBar />}
        </section>
    );
};

export default CoverSection;
