import { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { setCurrentAddress, updateUserData } from "../../../store";
import { useAppDispatch } from "../../../hooks";
import { addressService } from "../../../services/address-service";
import { addressToStr } from "../../../utils/addressUtils";

import CloseButton from "../../../components/buttons/close-button/CloseButton";
import Icon from "../../../components/icon/Icon";
import RemoveAddressPopup from "./RemoveAddressPopup";
import Row from "../../../components/row/Row";
import Text from "../../../components/text/Text";

import type { Address } from "@k7bart/restaurant-shared-types";

const AddressRow = ({ address }: { address: Address }) => {
    const dispatch = useAppDispatch();
    const [showPopup, setShowPopup] = useState(false);
    const { id, isCurrent } = address;
    const addressStr = addressToStr(address);

    const handleRemove = async () => {
        try {
            const { data: addresses } = await addressService.deleteAddress(id);
            dispatch(updateUserData({ addresses }));
        } catch (error) {
            console.error(error);
        }
    };

    const handleSetCurrent = async () => {
        if (isCurrent) return;

        try {
            const { data } = await addressService.updateAddress(id, {
                isCurrent: true,
            });
            dispatch(setCurrentAddress(data));
        } catch (error) {
            console.error(error);
        }
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
