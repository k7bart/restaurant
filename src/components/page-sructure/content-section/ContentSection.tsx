import { type ReactNode } from "react";
import cn from "classnames";
import Footer from "../../footer/Footer";
import Text from "../../text/Text";
import Section from "../section/Section";
import styles from "./ContentSection.module.scss";
import ContentSectionNav from "./content-section-nav/ContentSectionNav";

type Props = {
    children: ReactNode;
    className?: string;
    navigation?: ReactNode;
    title?: string;
    subtitle?: string;
};

const ContentSection = ({
    children,
    title,
    subtitle,
    className,
    navigation,
}: Props) => (
    <Section className={cn(styles.content, className)}>
        {navigation && <ContentSectionNav>{navigation}</ContentSectionNav>}
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

export default ContentSection;
