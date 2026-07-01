import { type ReactNode } from "react";
import cn from "classnames";
import { Helmet } from "react-helmet";
import HeaderNavigation from "../../header-navigation/HeaderNavigation";
import styles from "./TwoSectionsPage.module.scss";

type Props = {
    children: ReactNode;
    title: string;
};

const TwoSectionsPage = ({ children, title }: Props) => (
    <>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <HeaderNavigation />
        <main className={cn(styles.twoSections)}>{children}</main>
    </>
);

export default TwoSectionsPage;
