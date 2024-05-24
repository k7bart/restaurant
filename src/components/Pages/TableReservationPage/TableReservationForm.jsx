import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import DateTimeInput from "../../Inputs/DateTimeInput";
import EmailInput from "../../Inputs/EmailInput";
import NameInput from "../../Inputs/NameInput";
import NumberOfGuestsInput from "../../Inputs/NumberOfGuestsInput";
import PhoneInput from "../../Inputs/PhoneInput";
import { NavLink } from "react-router-dom";

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
    date: yup.date().min(new Date(), "Date must be later than today"),
    time: yup.string().required(), // push time value to date?

    numberOfChildren: yup
        .number()
        .transform((value, originalValue) => {
            return originalValue === "" ? 0 : value;
        })
        .min(0)
        .integer(),
    additionalRequirements: yup.string(),
});

const ReservationForm = () => {
    const user = useSelector((state) => state.user) || null;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(reservationSchema),
    });

    const onSubmit = (data) => console.log(data);

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

            <NameInput
                register={register}
                errors={errors}
                name={user.name}
                surname={user.surname}
            />
            <NumberOfGuestsInput register={register} errors={errors} />

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

            <DateTimeInput register={register} errors={errors} />

            <label>
                <p>Additional requirements</p>
                <textarea {...register("additionalRequirements")} />
            </label>

            <button type="submit" className="submit">
                Submit
            </button>
        </form>
    );
};

export default ReservationForm;
