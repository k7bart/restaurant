import Cover from "../../half-page-cover/Cover";
import Logo from "../../logo/Logo";
import NavBar from "../../nav-bar/NavBar";
import Section from "../section/Section";
import styles from "./CoverSection.module.scss";

type Props = {
    subtitle?: string;
    title?: string;
    backgroundImage: string;
};

const CoverSection = ({ subtitle, title, backgroundImage }: Props) => (
    <Section className={styles.cover}>
        <Logo additionalStyles={styles.logo} />
        <Cover
            backgroundImage={backgroundImage}
            subtitle={subtitle}
            title={title}
        />
        <NavBar additionalStyles={styles.navbar} />
    </Section>
);

export default CoverSection;
