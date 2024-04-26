import ResponsiveNavbar from "./ResponsiveNavBar/ResponsiveNavBar";

const Page = ({ children }) => {
    return (
        <div className="page">
            <header>
                <ResponsiveNavbar />
            </header>
            <body>{children}</body>
        </div>
    );
};

export default Page;
