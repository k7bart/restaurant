import Footer from "./Footer/Footer";

const ContentSection = ({ header, children }) => {
    return (
        <section className="content">
            <header>
                <h3>{header.title}</h3>
                <p className="large">{header.text}</p>
            </header>
            <main>{children}</main>
            <Footer />
        </section>
    );
};

export default ContentSection;
