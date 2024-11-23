import Footer from "../../Footer/Footer";
import Text from "../../Text/Text";
import Section from "../Section/Section";
import styles from "./ContentSection.module.scss";

const ContentSection = ({ header = undefined, nav = undefined, children }) => {
    return (
        <Section className={styles.content}>
            {nav}
            {header && (
                <header>
                    <h3>{header.title}</h3>
                    <Text size="large">{header.text}</Text>
                </header>
            )}
            <main>{children}</main>
            <Footer />
        </Section>
    );
};

export default ContentSection;
