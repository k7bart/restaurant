import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SpecialGuest = ({ guest }) => {
    return (
        <div>
            <h3>Special guest</h3>
            <div className="special-guest">
                <img src={guest.photo} alt="" />
                <div>
                    <h4>{guest.name}</h4>
                    <p className="text">{guest.introduction}</p>
                    <div className="links">
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

export default SpecialGuest;
