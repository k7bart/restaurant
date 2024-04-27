import ResponsiveNavbar from "./ResponsiveNavBar/ResponsiveNavBar";

const Page = ({ children }) => {
    return (
        <div className="page">
            <header>
                <ResponsiveNavbar />
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Page;
