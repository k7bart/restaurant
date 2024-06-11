import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { capitalize } from "../../../../utils/stringUtils";
import * as yup from "yup";

import EmailInput from "../../../Inputs/EmailInput";
import NameInput from "../../../Inputs/NameInput";
import PhoneInput from "../../../Inputs/PhoneInput";

const reservationSchema = yup.object({
    name: yup.string().required("Please provide your name"),
    numberOfAdults: yup.number().required().positive().integer(),
    email: yup
        .string()
        .email("Please provide a valid email address")
        .optional(),
    phone: yup
        .string()
        .required(
            "Please share your phone number. We'll only reach out if we have questions."
        ),
    numberOfChildren: yup
        .number()
        .transform((value, originalValue) => {
            return originalValue === "" ? 0 : value;
        })
        .min(0)
        .integer(),
});

const EventReservationForm = () => {
    const user = useSelector((state) => state.user) || null;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(reservationSchema),
        defaultValues: {
            name: user ? `${user.name} ${user.surname}` : "",
            numberOfAdults: "",
            email: user ? user.email : "",
            phone: user ? user.phone : "",
            numberOfChildren: "",
        },
    });

    const onSubmit = (data) => {
        const formattedData = {
            ...data,
            name: capitalize(data.name),
        };
        console.log(formattedData);
        reset();
    };

    const errorMap = {
        numberOfAdults: errors.numberOfAdults && (
            <p className="error">Please provide the number of adult guests.</p>
        ),
        numberOfChildren: errors.numberOfChildren && (
            <p className="error">{errors.numberOfChildren.message}</p>
        ),
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {!user && (
                <p className="large">
                    We kindly invite you to
                    <NavLink to="/login" className="large wisteria">
                        &nbsp;log in&nbsp;
                    </NavLink>
                    for a smoother and quicker experience.
                </p>
            )}

            <NameInput register={register} error={errors.name} />

            <div>
                <label>
                    <p>Number of adults</p>
                    <input {...register("numberOfAdults", { min: 1 })} />
                    {errorMap.numberOfAdults}
                </label>
                <label>
                    <p>Number of children</p>
                    <input {...register("numberOfChildren")} />
                    {errorMap.numberOfChildren}
                </label>
            </div>

            <div>
                <PhoneInput register={register} error={errors.phone} />
                <EmailInput register={register} error={errors.email} />
            </div>

            <button type="submit" className="small color">
                Submit
            </button>
        </form>
    );
};

export default EventReservationForm;
