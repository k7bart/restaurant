import useWindowWidth from "../../hooks/useWindowWidth";
import ResponsiveNavbar from "../ResponsiveNavBar/ResponsiveNavBar";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

const PageWithCover = ({ cover, section, addLogo, addNavBar }) => {
    // todo: unite responsive logic
    const windowWidth = useWindowWidth();
    const logo = addLogo && windowWidth > 820 && <Logo />;
    const navbar = addNavBar && windowWidth > 820 && <NavBar />;

    return (
        <div className="page-with-cover">
            <header>
                <ResponsiveNavbar />
            </header>
            <main>
                <section className="section">
                    <div className="cover-container">
                        {logo}
                        {cover}
                        {navbar}
                    </div>
                </section>
                {section}
            </main>
        </div>
    );
};

export default PageWithCover;
