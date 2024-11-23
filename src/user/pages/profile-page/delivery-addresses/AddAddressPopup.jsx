import AddressForm from "./AddressForm";
import Popup from "../../../components/Popup/Popup";

const AddAddressPopup = ({ closePopup }) => {
    return (
        <Popup closePopup={closePopup}>
            <h4>Do you want to add the address?</h4>
            <AddressForm />
            {/* add map  */}
        </Popup>
    );
};

export default AddAddressPopup;
