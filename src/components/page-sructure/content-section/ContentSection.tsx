import { type ReactNode } from "react";
import cn from "classnames";
import Footer from "../../footer/Footer";
import Text from "../../text/Text";
import Section from "../section/Section";
import styles from "./ContentSection.module.scss";
import Loader from "../../loader/Loader";

type Props = {
    children: ReactNode;
    className?: string;
    navigation?: ReactNode;
    title?: string;
    subtitle?: string;
    isLoading?: boolean;
};

const ContentSection = ({
    children,
    title,
    subtitle,
    className,
    navigation,
    isLoading,
}: Props) => (
    <Section
        className={cn(
            styles.content,
            navigation && styles.withNavigation,
            className,
        )}
    >
        {navigation}
        {(title || subtitle) && (
            <header>
                {title && <h3>{title}</h3>}
                {subtitle && <Text size="large">{subtitle}</Text>}
            </header>
        )}
        <main>{isLoading ? <Loader /> : children}</main>
        <Footer />
    </Section>
);

export default ContentSection;
