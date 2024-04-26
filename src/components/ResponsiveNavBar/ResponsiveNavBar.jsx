import useWindowWidth from "../../hooks/useWindowWidth";
import { IoMenu } from "react-icons/io5";
import Logo from "../Logo/Logo";
import { FaUserCircle } from "react-icons/fa";
import "./ResponsiveNavBar.scss";

function ResponsiveNavbar() {
    const windowWidth = useWindowWidth();

    // Render the navigation bar only when windowWidth is less than 820px
    if (windowWidth > 820) {
        return null; // Render nothing if windowWidth is not less than 820px
    }

    return (
        <nav className="responsiveNavBar">
            <IoMenu />
            <Logo />
            <FaUserCircle />
        </nav>
    );
}

export default ResponsiveNavbar;
