import classNames from "classnames";
import styles from "./Section.module.scss";

const Section = ({ children, className }) => {
    return (
        <section className={classNames(styles.section, className)}>
            {children}
        </section>
    );
};

export default Section;
