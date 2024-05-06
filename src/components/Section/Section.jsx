import Footer from "../Footer/Footer";

const Section = ({ header, children }) => {
    return (
        <section>
            <div className="content">
                <header className="header">
                    <h3>{header.title}</h3>
                    <p className="text">{header.text}</p>
                </header>
                {children}
                <Footer />
            </div>
        </section>
    );
};

export default Section;
