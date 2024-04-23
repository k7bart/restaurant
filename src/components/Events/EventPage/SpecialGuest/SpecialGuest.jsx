import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./SpecialGuest.scss";

const SpecialGuest = ({ guest }) => {
    return (
        <section className="subsection special-guest">
            <h3>Special guest</h3>
            <div>
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
        </section>
    );
};

export default SpecialGuest;
