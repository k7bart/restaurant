import { type ReactNode } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import Footer from "../../footer/Footer";
import Text from "../../text/Text";
import Section from "../Section/Section";
import styles from "./ContentSection.module.scss";

type Props = {
    children: ReactNode;
    className?: string;
    title?: string;
    subtitle?: string;
};

const ContentSection = ({ children, title, subtitle, className }: Props) => {
    return (
        <Section className={cn(styles.content, className)}>
            {(title || subtitle) && (
                <header>
                    {title && <h3>{title}</h3>}
                    {subtitle && <Text size="large">{subtitle}</Text>}
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
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

export default ContentSection;
