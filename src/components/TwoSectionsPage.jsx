import { Helmet } from "react-helmet";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";

const TwoSectionsPage = ({ children, title }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <HeaderNavigation />
            <main className="two-sections">{children}</main>
        </>
    );
};

export default TwoSectionsPage;
