import { type ReactNode } from "react";
import ExternalLinkComponent from "../../../components/links/external-link-component/ExternalLinkComponent";
import Logo from "../../../components/logo/Logo";
import CustomLink from "../../../components/links/custom-link/CustomLink";
import CustomNavLink from "../../../components/links/custom-nav-link/CustomNavLink";
import styles from "./Footer.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const LINKS = [
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

const NAV_LINKS: ReactNode = LINKS.map(({ to, text }) => (
    <CustomNavLink to={to} key={to}>
        {text}
    </CustomNavLink>
));

const Footer = () => (
    <footer className={styles.footer}>
        <div className="container">
            <Logo />

            <ExternalLinkComponent href="tel:+380630000000">
                <FaPhone />
                {"+380 (63) 00 00 000"}
            </ExternalLinkComponent>
            <ExternalLinkComponent href="mailto:b.art@gmail.com">
                <IoMail />
                b.art@gmail.com
            </ExternalLinkComponent>

            <CustomLink to="https://www.linkedin.com/in/kateryna-bartienieva/">
                By Kateryna Bartienieva
            </CustomLink>
        </div>

        <div className="container">{NAV_LINKS}</div>

        <div>
            <CustomLink to="https://www.instagram.com" target="_blank">
                <FaInstagram />
                @b.art
            </CustomLink>
            <CustomLink to="https://www.facebook.com" target="_blank">
                <FaFacebook />
                b.art
            </CustomLink>
        </div>
    </footer>
);

export default Footer;
