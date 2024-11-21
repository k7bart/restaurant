import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import Text from "../../../../components/Text/Text";

import styles from "./SpecialGuest.module.scss";

const SpecialGuest = ({ guest }) => {
    return (
        <div>
            <h3>Special guest</h3>

            <div className={styles.specialGuest}>
                <img src={guest.photo} alt="" />

                <div className={styles.info}>
                    <h4>{guest.name}</h4>

                    <Text>{guest.introduction}</Text>

                    <div className={styles.links}>
                        <Link>
                            <FaInstagram />
                        </Link>
                        <Link>
                            <FaFacebook />
                        </Link>
                        <Link>
                            <FaSquareXTwitter />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

SpecialGuest.propTypes = {
    guest: PropTypes.shape({
        photo: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        introduction: PropTypes.string.isRequired,
    }).isRequired,
};

export default SpecialGuest;
