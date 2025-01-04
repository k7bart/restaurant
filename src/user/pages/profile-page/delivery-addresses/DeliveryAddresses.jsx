import { useState } from "react";

import PropTypes from "prop-types";

import AddAddressPopup from "./add-address-popup/AddAddressPopup";
import Address from "./Address";
import Button from "../../../../common/components/buttons/Button/Button";

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

DeliveryAddresses.propTypes = {
    user: PropTypes.shape({
        addresses: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
            })
        ).isRequired,
        currentAddressId: PropTypes.string.isRequired,
    }).isRequired,
};

export default DeliveryAddresses;
