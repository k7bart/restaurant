import Footer from "../../../components/Footer/Footer";

const ContentSection = ({ header = undefined, nav = undefined, children }) => {
    return (
        <section className="content">
            {nav}
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
