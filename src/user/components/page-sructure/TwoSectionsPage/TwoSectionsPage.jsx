import { Helmet } from "react-helmet";
import HeaderNavigation from "../../HeaderNavigation/HeaderNavigation";
import styles from "./TwoSectionsPage.module.scss";
import classNames from "classnames";

const TwoSectionsPage = ({ children, title }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <HeaderNavigation />
            <main className={classNames(styles.twoSections)}>{children}</main>
        </>
    );
};

export default TwoSectionsPage;
