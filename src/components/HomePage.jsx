import Logo from "./Logo";
import NavBar from "./NavBar";

function FrontPage() {
    const containerStyle = {
        height: "100vh",
        padding: "64px 0",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
    };
    const textContainerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };
    const titleStyle = {
        fontWeight: 400,
        fontSize: "160px",
    };
    const subtitleStyle = {
        fontFamily: "Kaushan Script, cursive",
        fontWeight: 400,
        color: "#face8d",
        fontSize: "48px",
    };
    const textStyle = {
        fontWeight: 200,
        fontSize: "24px",
        textAlign: "center",
        maxWidth: "55%",
    };

    return (
        <div style={containerStyle}>
            <Logo />
            <div style={textContainerStyle}>
                <h2 style={subtitleStyle}>The pure taste of</h2>
                <h1 style={titleStyle}>Thailand</h1>
                <p style={textStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                </p>
            </div>
            <NavBar />
        </div>
    );
}

export default FrontPage;
