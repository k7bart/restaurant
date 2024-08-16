import { useState } from "react";
import { useDispatch } from "react-redux";
import { IoCheckmark } from "react-icons/io5";
import { setCurrentAddress } from "../../../../store";
import CloseButton from "../../../../common/components/buttons/CloseButton/CloseButton";
import Icon from "../../../components/Icon/Icon";
import RemoveAddressPopup from "./RemoveAddressPopup";
import Row from "../../../../common/components/Row/Row";
import Text from "../../../components/Text/Text";

const Address = ({ address, currentAddressId }) => {
    const dispatch = useDispatch();
    const [addressToRemove, setAddressToRemove] = useState(null);
    const { id, city, street, house, apartment } = address;

    return (
        <>
            <Row onClick={() => dispatch(setCurrentAddress(id))}>
                <Icon>{currentAddressId === id && <IoCheckmark />}</Icon>

                <Text>
                    {`${city}, ${street} ${house}${
                        apartment ? "/" + apartment : ""
                    }`}
                </Text>

                <CloseButton
                    onClick={(e) => {
                        e.stopPropagation();
                        setAddressToRemove(address);
                    }}
                />
            </Row>
            {addressToRemove && addressToRemove.id === id && (
                <RemoveAddressPopup
                    address={address}
                    closePopup={() => setAddressToRemove(null)}
                />
            )}
        </>
    );
};

export default Address;
