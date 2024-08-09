import Logo from "../../../common/components/Logo/Logo";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

function HeaderNavigation() {
    return (
        <header>
            <nav>
                <IoMenu />
                <Logo />
                <Link to="/profile">
                    <FaUserCircle />
                </Link>
            </nav>
        </header>
    );
}

export default HeaderNavigation;
