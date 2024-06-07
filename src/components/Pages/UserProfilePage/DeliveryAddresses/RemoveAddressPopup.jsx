import Popup from "../../../Popup";

import { useDispatch } from "react-redux";
import { removeAddress } from "../../../../store";

const RemoveAddressPopup = ({ closePopup, address }) => {
    const dispatch = useDispatch();
    const handleAddressRemove = (id) => {
        dispatch(removeAddress(id));
    };
    const addressStr = `${address.city}, ${address.street} ${address.house}${
        address.apartment ? "/" + address.apartment : ""
    }`;

    return (
        <Popup closePopup={closePopup}>
            <h4>Do you want to delete the address?</h4>
            <p className="large">{addressStr}</p>
            <div className="container">
                <button
                    className="small transparent"
                    onClick={() => {
                        handleAddressRemove(address.id);
                        closePopup();
                    }}
                >
                    Yes
                </button>
                <button className="small color" onClick={closePopup}>
                    No
                </button>
            </div>
        </Popup>
    );
};

export default RemoveAddressPopup;
