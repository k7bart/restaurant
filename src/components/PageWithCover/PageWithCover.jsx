import ResponsiveNavbar from "../ResponsiveNavBar/ResponsiveNavBar";

const PageWithCover = ({ cover, section }) => {
    return (
        <div className="pageWithCover">
            <header>
                <ResponsiveNavbar />
            </header>
            <main>
                <section className="section">
                    <div className="cover-container">{cover}</div>
                </section>
                {section}
            </main>
        </div>
    );
};

export default PageWithCover;
