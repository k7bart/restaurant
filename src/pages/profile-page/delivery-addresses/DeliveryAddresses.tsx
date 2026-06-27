import { useState } from "react";
import { useMe } from "../../../hooks/useMe";

import AddAddressPopup from "./AddAddressPopup";
import AddressRow from "./AddressRow";
import Button from "../../../components/buttons/button/Button";

const DeliveryAddresses = () => {
    const { addresses } = useMe();
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            {addresses.map((address) => (
                <AddressRow key={address.id} address={address} />
            ))}

            <Button
                size="small"
                color="wisteria"
                onClick={() => setShowPopup(true)}
            >
                Add address
            </Button>

            {showPopup && (
                <AddAddressPopup onClose={() => setShowPopup(false)} />
            )}
        </>
    );
};

export default DeliveryAddresses;
