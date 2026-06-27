import Button from "../../../components/buttons/Button/Button";
import Popup from "../../../components/popup/Popup";
import Text from "../../../components/text/Text";

type Props = {
    addressStr: string;
    onClose: () => void;
    onSubmit: () => void;
};

const RemoveAddressPopup = ({ onClose, onSubmit, addressStr }: Props) => {
    return (
        <Popup closePopup={onClose}>
            <h4>Do you want to delete the address?</h4>

            <Text size="large">{addressStr}</Text>

            <div className="container">
                <Button color="transparent" onClick={onSubmit}>
                    Yes
                </Button>

                <Button onClick={onClose}>No</Button>
            </div>
        </Popup>
    );
};

export default RemoveAddressPopup;
