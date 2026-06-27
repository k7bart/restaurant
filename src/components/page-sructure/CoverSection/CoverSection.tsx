import Cover from "../../half-page-cover/Cover";
import Logo from "../../Logo/Logo";
import NavBar from "../../NavBar/NavBar";
import Section from "../Section/Section";
import styles from "./CoverSection.module.scss";

type Props = {
    subtitle?: string;
    title?: string;
    backgroundImage: string;
};

const CoverSection = ({ subtitle, title, backgroundImage }: Props) => {
    return (
        <Section className={styles.cover}>
            <Logo additionalStyles={styles.logo} />
            <Cover
                backgroundImage={backgroundImage}
                subtitle={subtitle}
                title={title}
            />
            <NavBar />
        </Section>
    );
};

export default CoverSection;
