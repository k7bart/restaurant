import PropTypes from "prop-types";

import AddAddressForm from "./AddAddressForm";
import Popup from "../../../../components/Popup/Popup";

const AddAddressPopup = ({ closePopup }) => {
    return (
        <Popup closePopup={closePopup}>
            <h4>Do you want to add the address?</h4>

            <AddAddressForm />

            {/* TODO: add map  */}
        </Popup>
    );
};

AddAddressPopup.propTypes = {
    closePopup: PropTypes.func.isRequired,
};

export default AddAddressPopup;
