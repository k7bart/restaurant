import { useDispatch } from "react-redux";
import { removeAddress } from "../../../../store";

import PropTypes from "prop-types";

import Button from "../../../../common/components/buttons/Button/Button";
import Popup from "../../../components/Popup/Popup";
import Text from "../../../components/Text/Text";

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

            <Text size="large">{addressStr}</Text>

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
RemoveAddressPopup.propTypes = {
    closePopup: PropTypes.func.isRequired,
    address: PropTypes.shape({
        id: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        house: PropTypes.string.isRequired,
        apartment: PropTypes.string,
    }).isRequired,
};

export default RemoveAddressPopup;
