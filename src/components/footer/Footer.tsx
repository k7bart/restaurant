import ExternalLinkComponent from "../links/external-link-component/ExternalLinkComponent";
import CustomLink from "../links/custom-link/CustomLink";
import Logo from "../logo/Logo";
import styles from "./Footer.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => (
    <footer className={styles.footer}>
        <Logo />
        <div>
            <div className="container">
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
        </div>
    </footer>
);

export default Footer;
