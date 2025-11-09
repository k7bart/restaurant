import { useState } from "react";
import { useMe } from "../../../../hooks/useMe";
import { IoCopyOutline } from "react-icons/io5";

import Button from "../../../../common/components/buttons/Button/Button";
import Text from "../../../components/Text/Text";

import styles from "./Referral.module.scss";

const Referral = () => {
    const { refferalLink, referralPromoCode } = useMe();
    const [copiedItemId, setCopiedItemId] = useState<string | null>(null);

    const copyItems = [
        { id: "referral", text: refferalLink, size: "large" as const },
        { id: "promo", text: referralPromoCode, size: "small" as const },
    ];

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedItemId(id);
        setTimeout(() => setCopiedItemId(null), 3000);
    };

    return (
        <section className={styles.referral}>
            <div>
                {copyItems.map((item) => (
                    <Button
                        key={item.id}
                        size={item.size}
                        color="transparent"
                        onClick={() => handleCopy(item.text, item.id)}
                    >
                        {copiedItemId === item.id ? "Copied" : item.text}
                        <IoCopyOutline />
                    </Button>
                ))}
            </div>

            <Text align="center" size="medium">
                Copy the link or promo code, send it to your friend and you both
                are guaranteed to receive $10 discount
            </Text>
        </section>
    );
};

export default Referral;
