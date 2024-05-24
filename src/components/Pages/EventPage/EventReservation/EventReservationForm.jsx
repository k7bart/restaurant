import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import EmailInput from "../../../Inputs/EmailInput";
import PhoneInput from "../../../Inputs/PhoneInput";

const reservationSchema = yup.object({
    name: yup.string().required(),
    numberOfAdults: yup.number().required().positive().integer(),
    email: yup
        .string()
        .email("Please provide a valid email address")
        .optional(),
    phone: yup
        .string()
        .required(
            "Please share your phone number. We'll only reach out if we have questions."
        ), // add better phone validation
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
        formState: { errors },
    } = useForm({
        resolver: yupResolver(reservationSchema),
    });

    const onSubmit = (data) => console.log(data);

    const errorMap = {
        name: errors.name && <p className="error">Please provide your name</p>,
        numberOfAdults: errors.numberOfAdults && (
            <p className="error">Please provide the number of adult guests.</p>
        ),
        numberOfChildren: errors.numberOfChildren && (
            <p className="error">{errors.numberOfChildren.message}</p>
        ),
        date: errors.date && (
            <p className="error">
                Please provide the date of your visit. {errors.date.message}
            </p>
        ),
        time: errors.time && <p className="error">{errors.time.message}</p>,
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

            <label>
                <p>Name</p>
                <input {...register("name")} />
                {errorMap.name}
            </label>

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
                <PhoneInput
                    register={register}
                    error={errors.phone}
                    defaultPhone={user && user.phone}
                />
                <EmailInput
                    register={register}
                    error={errors.email}
                    defaultEmail={user && user.email}
                />
            </div>

            <button type="submit" className="submit">
                Submit
            </button>
        </form>
    );
};

export default EventReservationForm;
