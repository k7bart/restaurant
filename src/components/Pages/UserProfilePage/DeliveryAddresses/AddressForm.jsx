import { capitalizeFirstLetters } from "../../../../utils/stringUtils";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { addAddress } from "../../../../store";

const addressSchema = yup.object({
    city: yup.string().required("Please provide city"),
    street: yup.string().required("Please provide street"),
    house: yup.number().required("Please provide house number"),
    entrance: yup.number().optional().positive().integer(),
    floor: yup.number().optional().positive().integer(),
    apartment: yup.number().optional().positive().integer(),
    intercom: yup.number().optional().positive().integer(),
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
            city: capitalizeFirstLetters(data.city),
            street: capitalizeFirstLetters(data.street),
        };
        dispatch(addAddress(formattedData));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>
                    <p>City</p>
                    <input {...register("city")} />
                    {errors.city && (
                        <p className="error">{errors.city.message}</p>
                    )}
                </label>
                <label>
                    <p>Street</p>
                    <input {...register("street")} />
                    {errors.street && (
                        <p className="error">{errors.street.message}</p>
                    )}
                </label>
                <label>
                    <p>House</p>
                    <input {...register("house")} />
                    {errors.house && (
                        <p className="error">{errors.house.message}</p>
                    )}
                </label>
            </div>
            <div>
                <label>
                    <p>Entrance</p>
                    <input {...register("entrance")} />
                    {errors.entrance && (
                        <p className="error">{errors.entrance.message}</p>
                    )}
                </label>
                <label>
                    <p>Floor</p>
                    <input {...register("floor")} />
                    {errors.floor && (
                        <p className="error">{errors.floor.message}</p>
                    )}
                </label>
                <label>
                    <p>Apt/office</p>
                    <input {...register("apartment")} />
                    {errors.apartment && (
                        <p className="error">{errors.apartment.message}</p>
                    )}
                </label>
                <label>
                    <p>Intercom</p>
                    <input {...register("intercom")} />
                    {errors.intercom && (
                        <p className="error">{errors.intercom.message}</p>
                    )}
                </label>
            </div>

            <button type="submit" className="small color submit">
                Save
            </button>
        </form>
    );
};

export default AddressForm;
