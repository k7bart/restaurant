import { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { removeAddress, setCurrentAddress } from "../../../store";
import { useAppDispatch } from "../../../hooks";
import { addressToStr } from "../../../utils/addressUtils";

import CloseButton from "../../../components/buttons/CloseButton/CloseButton";
import Icon from "../../../components/Icon/Icon";
import RemoveAddressPopup from "./RemoveAddressPopup";
import Row from "../../../components/row/Row";
import Text from "../../../components/text/Text";

import type { Address } from "@k7bart/restaurant-shared-types";

const AddressRow = ({ address }: { address: Address }) => {
    const dispatch = useAppDispatch();
    const [showPopup, setShowPopup] = useState(false);
    const { id, isCurrent } = address;
    const addressStr = addressToStr(address);

    const handleRemove = () => {
        // TODO: add api call
        dispatch(removeAddress(id));
    };

    const handleSetCurrent = () => {
        // TODO: add api call
        dispatch(setCurrentAddress(id));
    };

    return (
        <>
            <Row onClick={handleSetCurrent}>
                {isCurrent && (
                    <Icon>
                        <IoCheckmark />
                    </Icon>
                )}

                <Text size="medium">{addressStr}</Text>

                <CloseButton
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowPopup(true);
                    }}
                />
            </Row>

            {showPopup && (
                <RemoveAddressPopup
                    addressStr={addressStr}
                    onClose={() => {
                        setShowPopup(false);
                    }}
                    onSubmit={handleRemove}
                />
            )}
        </>
    );
};

export default AddressRow;
