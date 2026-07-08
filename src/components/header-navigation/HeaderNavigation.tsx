import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import styles from "./HeaderNavigation.module.scss";

function HeaderNavigation() {
    return (
        <header>
            <nav className={styles.nav}>
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
