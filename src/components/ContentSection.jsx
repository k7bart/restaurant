import Footer from "./Footer";

const ContentSection = ({ header = undefined, nav = undefined, children }) => {
    return (
        <section className="content">
            {nav && <nav>{nav}</nav>}
            {header && (
                <header>
                    <h3>{header.title}</h3>
                    <p className="large">{header.text}</p>
                </header>
            )}
            <main>{children}</main>
            <Footer />
        </section>
    );
};

export default ContentSection;
