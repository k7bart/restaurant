import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addAddress } from "../../../../../store";
import { capitalize } from "../../../../../utils/stringUtils";

import * as yup from "yup";
import addressSchema from "../../../../components/Inputs/address-inputs/address-yup-utils/addressSchema";

import Button from "../../../../../common/components/buttons/Button/Button";
import DeliveryAddressInputs from "../../../../components/Inputs/address-inputs/DeliveryAddressInputs";
import Form from "../../../../components/form/Form";

const schema = yup.object({
    ...addressSchema,
});

const AddAddressForm = () => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        const formattedData = {
            ...data,
            id: `${data.street}${data.house}/${
                data.apartment && data.apartment
            }`,
            city: capitalize(data.city),
            street: capitalize(data.street),
        };
        dispatch(addAddress(formattedData));
        reset();
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <DeliveryAddressInputs errors={errors} register={register} />

            <Button type="submit">Add address</Button>
        </Form>
    );
};

export default AddAddressForm;
