import RemoveAddressPopup from "./RemoveAddressPopup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IoClose, IoCheckmark } from "react-icons/io5";
import { setCurrentAddress } from "../../../../store";

const Address = ({ address, currentAddressId }) => {
    const dispatch = useDispatch();
    const [addressToRemove, setAddressToRemove] = useState(null);
    const { id, city, street, house, apartment } = address;

    return (
        <div
            key={id}
            className="row"
            onClick={() => dispatch(setCurrentAddress(id))}
        >
            <div className="with-svg">
                {currentAddressId === id && <IoCheckmark />}
            </div>
            <p>
                {`${city}, ${street} ${house}${
                    apartment ? "/" + apartment : ""
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

            {addressToRemove && addressToRemove.id === id && (
                <RemoveAddressPopup
                    address={address}
                    closePopup={() => setAddressToRemove(null)}
                />
            )}
        </div>
    );
};

export default Address;
