import AccordionItem from "./AccordionItem";
import Popup from "../../Popup";
import RemoveAddressPopup from "./RemoveAddressPopup";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { IoClose, IoCheckmark } from "react-icons/io5";
import { setCurrentAddress } from "../../../store";

const AddAddressPopup = ({ closePopup }) => {
    return (
        <Popup closePopup={closePopup}>
            <h4>Do you want to add the address?</h4>
        </Popup>
    );
};

const DeliveryAddresses = ({ user }) => {
    const [isAddAddressPopupOpen, setIsAddAddressPopupOpen] = useState(false);
    const [addressToRemove, setAddressToRemove] = useState(null);
    const [currentAddress, setCurrentAddressState] = useState(
        user.currentAddress
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentAddress(currentAddress));
    }, [currentAddress, dispatch]);

    const openAddAddressPopup = () => {
        setIsAddAddressPopupOpen(true);
    };

    const openRemoveAddressPopup = (address) => {
        setAddressToRemove(address);
    };

    const handleCurrentAddressSetting = (address) => {
        setCurrentAddressState(address);
    };

    return (
        <AccordionItem title="Delivery addresses">
            {user.addresses.map((address, i) => (
                <div
                    key={i}
                    className="row"
                    onClick={() => handleCurrentAddressSetting(address)}
                >
                    <div className="with-svg">
                        {currentAddress === address && <IoCheckmark />}
                    </div>
                    <p>{address}</p>
                    <button
                        className="with-svg"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent the row click event
                            openRemoveAddressPopup(address);
                        }}
                    >
                        <IoClose />
                    </button>
                    {addressToRemove === address && (
                        <RemoveAddressPopup
                            address={address}
                            closePopup={() => setAddressToRemove(null)}
                        />
                    )}
                </div>
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
