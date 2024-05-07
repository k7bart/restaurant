import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";

const TwoSectionsPage = ({ children }) => {
    return (
        <>
            <HeaderNavigation />
            <main className="two-sections">{children}</main>
        </>
    );
};

export default TwoSectionsPage;
