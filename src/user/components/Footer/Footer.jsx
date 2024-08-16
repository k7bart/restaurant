import ExternalLinkComponent from "../links/ExternalLinkComponent/ExternalLinkComponent";
import LinkComponent from "../links/LinkComponent/LinkComponent";
import Logo from "../../../common/components/Logo/Logo";
import NavLinkComponent from "../links/NavLinkComponent/NavLinkComponent";
import styles from "./Footer.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const links = [
    { to: "/login", text: "Login" },
    { to: "/registration", text: "Register" },
    { to: "/profile", text: "Profile" },
    { to: "/menu", text: "Menu" },
    { to: "/table-reservation", text: "Book a table" },
    { to: "/events", text: "Events" },
    { to: "/cart", text: "Cart" },
    { to: "/admin", text: "Admin" },
    { to: "/error", text: "Error" },
];

const navLinks = links.map(({ to, text }) => (
    <NavLinkComponent to={to} key={to}>
        {text}
    </NavLinkComponent>
));

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <Logo />

                <ExternalLinkComponent
                    href="tel:+380630000000"
                    className="link"
                >
                    <FaPhone />
                    {"+380 (63) 00 00 000"}
                </ExternalLinkComponent>
                <ExternalLinkComponent
                    href="mailto:b.art@gmail.com"
                    className="link"
                >
                    <IoMail />
                    b.art@gmail.com
                </ExternalLinkComponent>

                <LinkComponent to="https://www.linkedin.com/in/kateryna-bartienieva/">
                    By Kateryna Bartienieva
                </LinkComponent>
            </div>

            <div className="container">{navLinks}</div>

            <div>
                <LinkComponent to="https://www.instagram.com" target="_blank">
                    <FaInstagram />
                    @b.art
                </LinkComponent>
                <LinkComponent to="https://www.facebook.com" target="_blank">
                    <FaFacebook />
                    b.art
                </LinkComponent>
            </div>
        </footer>
    );
};

export default Footer;
