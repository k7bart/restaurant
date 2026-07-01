import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { addAddress } from "../../../store";
import { capitalize } from "../../../utils/stringUtils";
import addressSchema from "../../../components/inputs/address-inputs/address-yup-utils/addressSchema";

import Button from "../../../components/buttons/button/Button";
import DeliveryAddressInputs from "../../../components/inputs/address-inputs/DeliveryAddressInputs";
import Form from "../../../components/form/Form";
import Popup from "../../../components/popup/Popup";

import type { Address } from "@k7bart/restaurant-shared-types";

const schema = yup.object({
    ...addressSchema,
});

const AddAddressPopup = ({ onClose }: { onClose: () => void }) => {
    const dispatch = useAppDispatch();
    const methods = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: Address) => {
        const formattedData = {
            ...data,
            id: `${data.street}${data.house}/${
                data.apartment && data.apartment
            }`,
            city: capitalize(data.city),
            street: capitalize(data.street),
        };
        dispatch(addAddress(formattedData));
        methods.reset();
    };

    return (
        <Popup closePopup={onClose}>
            <h4>Do you want to add the address?</h4>

            <FormProvider {...methods}>
                <Form onSubmit={onSubmit}>
                    <DeliveryAddressInputs />

                    <Button type="submit">Add address</Button>
                </Form>
            </FormProvider>

            {/* TODO: add map */}
        </Popup>
    );
};

export default AddAddressPopup;
