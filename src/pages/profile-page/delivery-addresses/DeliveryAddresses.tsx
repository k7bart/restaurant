import { useState } from "react";
import { useMe } from "../../../hooks/useMe";

import AddAddressPopup from "./AddAddressPopup";
import AddressRow from "./AddressRow";
import Button from "../../../components/buttons/button/Button";
import NoDataMessage from "../NoDataMessage";

const DeliveryAddresses = () => {
    const { addresses } = useMe();
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            {addresses?.length ? (
                addresses.map((address) => (
                    <AddressRow key={address.id} address={address} />
                ))
            ) : (
                <NoDataMessage text="You don't have any delivery addresses yet. You can add one by clicking the button below" />
            )}

            <Button onClick={() => setShowPopup(true)}>Add address</Button>

            {showPopup && (
                <AddAddressPopup onClose={() => setShowPopup(false)} />
            )}
        </>
    );
};

export default DeliveryAddresses;
