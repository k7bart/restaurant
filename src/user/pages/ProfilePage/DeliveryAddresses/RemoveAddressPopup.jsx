import { useDispatch } from "react-redux";
import { removeAddress } from "../../../../store";
import Button from "../../../../common/components/buttons/Button/Button";
import Popup from "../../../components/Popup/Popup";

const RemoveAddressPopup = ({ closePopup, address }) => {
    const dispatch = useDispatch();
    const handleAddressRemove = (id) => {
        dispatch(removeAddress(id));
    };
    const { id, city, street, house, apartment } = address;
    const addressStr = `${city}, ${street} ${house}${
        apartment ? "/" + apartment : ""
    }`;

    return (
        <Popup closePopup={closePopup}>
            <h4>Do you want to delete the address?</h4>
            <p className="large">{addressStr}</p>
            <div className="container">
                <Button
                    color="transparent"
                    onClick={() => {
                        handleAddressRemove(id);
                        closePopup();
                    }}
                >
                    Yes
                </Button>

                <Button onClick={closePopup}>No</Button>
            </div>
        </Popup>
    );
};

export default RemoveAddressPopup;
