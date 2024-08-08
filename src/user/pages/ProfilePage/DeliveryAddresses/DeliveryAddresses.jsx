import AddAddressPopup from "./AddAddressPopup";
import Address from "./Address";
import Button from "../../../../common/components/buttons/Button/Button";
import { useState } from "react";

const DeliveryAddresses = ({ user }) => {
    const [isAddAddressPopupOpen, setIsAddAddressPopupOpen] = useState(false);

    const openAddAddressPopup = () => {
        setIsAddAddressPopupOpen(true);
    };

    return (
        <>
            {user.addresses.map((address) => (
                <Address
                    key={address.id}
                    address={address}
                    currentAddressId={user.currentAddressId}
                />
            ))}

            <Button size="small" color="wisteria" onClick={openAddAddressPopup}>
                Add address
            </Button>

            {isAddAddressPopupOpen && (
                <AddAddressPopup
                    closePopup={() => setIsAddAddressPopupOpen(false)}
                />
            )}
        </>
    );
};

export default DeliveryAddresses;
