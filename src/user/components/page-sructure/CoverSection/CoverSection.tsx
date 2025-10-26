import Cover from "../../half-page-cover/Cover";
import Section from "../Section/Section";
import Logo from "../../../../common/components/Logo/Logo";
import NavBar from "../../NavBar/NavBar";
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
