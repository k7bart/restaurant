import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { capitalize } from "../../../utils/stringUtils";

import * as yup from "yup";

import DateTimeInput from "../../Inputs/DateTimeInput";
import EmailInput from "../../Inputs/EmailInput";
import NameInput from "../../Inputs/NameInput";
import NumberOfGuestsInput from "../../Inputs/NumberOfGuestsInput";
import PhoneInput from "../../Inputs/PhoneInput";
import { NavLink } from "react-router-dom";

const reservationSchema = yup.object({
    name: yup.string().required("Please provide your name"),
    numberOfAdults: yup.number().required().positive().integer(),
    email: yup
        .string()
        .email("Please provide a valid email address")
        .optional(),
    // add better phone validation
    phone: yup
        .string()
        .required(
            "Please share your phone number. We'll only reach out if we have questions."
        ),
    date: yup.date().min(new Date(), "Date must be later than today"),
    // push time value to date?
    time: yup.string().required(),

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
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(reservationSchema),
        defaultValues: {
            name: user ? `${user.name} ${user.surname}` : "",
            numberOfAdults: "",
            email: user ? user.email : "",
            phone: user ? user.phone : "",
            date: "",
            time: "",
            numberOfChildren: "",
            additionalRequirements: "",
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

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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

            <NumberOfGuestsInput register={register} errors={errors} />

            <div>
                <PhoneInput register={register} error={errors.phone} />
                <EmailInput register={register} error={errors.email} />
            </div>

            <DateTimeInput register={register} errors={errors} />

            <label>
                <p>Additional requirements</p>
                <textarea {...register("additionalRequirements")} />
            </label>

            <button type="submit" className="small color">
                Submit
            </button>
        </form>
    );
};

export default ReservationForm;
