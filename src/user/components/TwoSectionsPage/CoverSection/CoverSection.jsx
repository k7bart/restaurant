import Logo from "../../../../common/components/Logo/Logo";
import NavBar from "../../NavBar/NavBar";

const CoverSection = ({ children, addLogo = true, addNavBar = true }) => {
    return (
        <section className="cover">
            {addLogo && <Logo />}
            {children}
            {addNavBar && <NavBar />}
        </section>
    );
};

export default CoverSection;
