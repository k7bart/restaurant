import { capitalize } from "../../../../utils/stringUtils";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { addAddress } from "../../../../store";

import Button from "../../../../common/components/buttons/Button/Button";
import Form from "../../../components/form/Form";
import CityInput from "../../../components/Inputs/address-inputs/CityInput";
import StreetInput from "../../../components/Inputs/address-inputs/StreetInput";
import HouseInput from "../../../components/Inputs/address-inputs/HouseInput";
import EntranceInput from "../../../components/Inputs/address-inputs/Entrance";
import Input from "../../../components/Inputs/Input/Input";

const addressSchema = yup.object({
    city: yup.string().required("Please provide city"),
    street: yup.string().required("Please provide street"),
    house: yup
        .number()
        .typeError("House must be a number")
        .required("Please provide house number"),
    entrance: yup
        .number()
        .transform((value, originalValue) =>
            originalValue.trim() === "" ? undefined : value
        )
        .optional()
        .positive()
        .integer(),
    floor: yup
        .number()
        .transform((value, originalValue) =>
            originalValue.trim() === "" ? undefined : value
        )
        .optional()
        .positive()
        .integer(),
    apartment: yup
        .number()
        .transform((value, originalValue) =>
            originalValue.trim() === "" ? undefined : value
        )
        .optional()
        .positive()
        .integer(),
    intercom: yup
        .number()
        .transform((value, originalValue) =>
            originalValue.trim() === "" ? undefined : value
        )
        .optional()
        .positive()
        .integer(),
});

const AddressForm = () => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(addressSchema),
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
            <div>
                <CityInput error={errors.city} register={register} required />

                <StreetInput
                    error={errors.street}
                    register={register}
                    required
                />

                <HouseInput error={errors.house} register={register} required />
            </div>
            <div>
                <EntranceInput error={errors.entrance} register={register} />

                <Input
                    error={errors.floor}
                    fieldName="floor"
                    register={register}
                />

                <Input
                    error={errors.apartment}
                    fieldName="apartment"
                    label="Apt/office"
                    register={register}
                />

                <Input
                    error={errors.intercom}
                    fieldName="intercom"
                    register={register}
                />
            </div>

            <Button size="full" color="wisteria" type="submit">
                Save
            </Button>
        </Form>
    );
};

export default AddressForm;
