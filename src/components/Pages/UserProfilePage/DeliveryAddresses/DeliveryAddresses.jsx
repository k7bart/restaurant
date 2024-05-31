import AccordionItem from "../AccordionItem";
import AddAddressPopup from "./AddAddressPopup";
import Address from "./Address";
import { useState } from "react";

const DeliveryAddresses = ({ user }) => {
    const [isAddAddressPopupOpen, setIsAddAddressPopupOpen] = useState(false);

    const openAddAddressPopup = () => {
        setIsAddAddressPopupOpen(true);
    };

    return (
        <AccordionItem title="Delivery addresses">
            {user.addresses.map((address, i) => (
                <Address
                    key={i}
                    address={address}
                    currentAddress={user.currentAddress}
                />
            ))}

            <button className="small color" onClick={openAddAddressPopup}>
                Add address
            </button>

            {isAddAddressPopupOpen && (
                <AddAddressPopup
                    closePopup={() => setIsAddAddressPopupOpen(false)}
                />
            )}
        </AccordionItem>
    );
};

export default DeliveryAddresses;
