import { IoMenu } from "react-icons/io5";
import Logo from "../Logo/Logo";
import { FaUserCircle } from "react-icons/fa";
import "./HeaderNavigation.scss";

function HeaderNavigation() {
    return (
        <header>
            <nav className="header-navigation">
                <IoMenu />
                <Logo />
                <FaUserCircle />
            </nav>
        </header>
    );
}

export default HeaderNavigation;
