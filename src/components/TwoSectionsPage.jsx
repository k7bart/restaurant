import { Helmet } from "react-helmet";
import HeaderNavigation from "./HeaderNavigation";

const TwoSectionsPage = ({ children, title, className = "" }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <HeaderNavigation />
            <main className={"two-sections " + className}>{children}</main>
        </>
    );
};

export default TwoSectionsPage;
