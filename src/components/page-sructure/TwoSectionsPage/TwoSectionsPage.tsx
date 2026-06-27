import { Helmet } from "react-helmet";
import HeaderNavigation from "../../header-navigation/HeaderNavigation";
import styles from "./TwoSectionsPage.module.scss";
import classNames from "classnames";

type Props = {
    children: React.ReactNode;
    title: string;
};

const TwoSectionsPage = ({ children, title }: Props) => {
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
