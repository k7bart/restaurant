import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { staff } from "../../../../state";
import Text from "../../../../components/text/Text";

import styles from "./SpecialGuest.module.scss";

const SpecialGuest = ({ guest }: { guest: (typeof staff)[number] }) => (
    <div>
        <h3>Special guest</h3>

        <div className={styles.specialGuest}>
            <img src={guest.photo} alt="" />

            <div className={styles.info}>
                <h4>{guest.name}</h4>

                <Text>{guest.introduction}</Text>

                <div className={styles.links}>
                    <Link to="/">
                        <FaInstagram />
                    </Link>
                    <Link to="/">
                        <FaFacebook />
                    </Link>
                    <Link to="/">
                        <FaSquareXTwitter />
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default SpecialGuest;
