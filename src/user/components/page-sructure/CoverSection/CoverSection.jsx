import Section from "../Section/Section";
import Logo from "../../../../common/components/Logo/Logo";
import NavBar from "../../NavBar/NavBar";
import styles from "./CoverSection.module.scss";

const CoverSection = ({ children, addLogo = true, addNavBar = true }) => {
    return (
        <Section className={styles.cover}>
            {addLogo && <Logo />}
            {children}
            {addNavBar && <NavBar />}
        </Section>
    );
};

export default CoverSection;
