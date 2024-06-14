import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Referral = ({ id }) => {
    const REFERRAL_LINK = "https://bart.ua/?referral=" + id; // make it work
    const PROMO_CODE = id;

    const [copiedReferral, setCopiedReferral] = useState(false);
    const [copiedPromo, setCopiedPromo] = useState(false);

    const copyReferralLink = () => {
        navigator.clipboard.writeText(REFERRAL_LINK);
        setCopiedReferral(true);
        setCopiedPromo(false);
        setTimeout(() => setCopiedReferral(false), 3000);
    };

    const copyPromoCode = () => {
        navigator.clipboard.writeText(PROMO_CODE);
        setCopiedPromo(true);
        setCopiedReferral(false);
        setTimeout(() => setCopiedPromo(false), 3000);
    };

    return (
        <AccordionItem
            title="Referral link and promo code"
            className="referral"
        >
            <div>
                <button
                    className="small transparent referral-link"
                    onClick={copyReferralLink}
                >
                    {copiedReferral ? "Copied" : REFERRAL_LINK}
                    <IoCopyOutline />
                </button>
                <button className="small transparent" onClick={copyPromoCode}>
                    {copiedPromo ? "Copied" : PROMO_CODE}
                    <IoCopyOutline />
                </button>
            </div>
            <p className="large">
                Copy the link or promo code, send it to your friend and you both
                are guaranteed to receive $10 discount
            </p>
        </AccordionItem>
    );
};

export default Referral;
