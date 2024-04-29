import ResponsiveNavbar from "../ResponsiveNavBar/ResponsiveNavBar";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

const PageWithCover = ({ cover, section, addLogo, addNavBar }) => {
    // const windowWidth = useWindowWidth();
    // const logo = windowWidth > 820 && <Logo />;
    // const navbar = windowWidth > 820 && <NavBar />;

    return (
        <div className="pageWithCover">
            <header>
                <ResponsiveNavbar />
            </header>
            <main>
                <section className="section">
                    <div className="cover-container">
                        {addLogo && <Logo />}
                        {cover}
                        {addNavBar && <NavBar />}
                    </div>
                </section>
                {section}
            </main>
        </div>
    );
};

export default PageWithCover;
