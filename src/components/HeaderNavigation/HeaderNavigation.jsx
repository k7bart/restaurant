import Logo from "../Logo/Logo";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

function HeaderNavigation() {
    return (
        <header>
            <nav>
                <IoMenu />
                <Logo />
                <FaUserCircle />
            </nav>
        </header>
    );
}

export default HeaderNavigation;
