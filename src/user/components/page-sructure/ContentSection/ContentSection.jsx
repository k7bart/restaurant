import PropTypes from "prop-types";
import cn from "classnames";
import Footer from "../../Footer/Footer";
import Text from "../../Text/Text";
import Section from "../Section/Section";
import styles from "./ContentSection.module.scss";

const ContentSection = ({ children, className, header, nav }) => {
    return (
        <Section className={cn(styles.content, className)}>
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

ContentSection.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    header: PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
    }),
    nav: PropTypes.node,
};

export default ContentSection;
