import RemoveAddressPopup from "./RemoveAddressPopup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IoClose, IoCheckmark } from "react-icons/io5";
import { setCurrentAddress } from "../../../../store";

const Address = ({ address, currentAddressId }) => {
    const dispatch = useDispatch();
    const [addressToRemove, setAddressToRemove] = useState(null);

    return (
        <div
            key={address.id}
            className="row"
            onClick={() => dispatch(setCurrentAddress(address.id))}
        >
            <div className="with-svg">
                {currentAddressId === address.id && <IoCheckmark />}
            </div>
            <p>
                {`${address.city}, ${address.street} ${address.house}${
                    address.apartment ? "/" + address.apartment : ""
                }`}
            </p>

            <button
                className="with-svg"
                onClick={(e) => {
                    e.stopPropagation();
                    setAddressToRemove(address);
                }}
            >
                <IoClose />
            </button>

            {addressToRemove && addressToRemove.id === address.id && (
                <RemoveAddressPopup
                    address={address}
                    closePopup={() => setAddressToRemove(null)}
                />
            )}
        </div>
    );
};

export default Address;
