import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import DateTimeInput from "../../Inputs/DateTimeInput";
import ContactInput from "../../Inputs/ContactInput";
import NameInput from "../../Inputs/NameInput";
import NumberOfGuestsInput from "../../Inputs/NumberOfGuestsInput";
import { NavLink } from "react-router-dom";

const reservationSchema = yup.object({
    name: yup.string().required(),
    numberOfAdults: yup.number().required().positive().integer(),
    email: yup.string().email(),
    phone: yup.string().required(), // add better phone validation
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
    const user = useSelector((state) => state.user) || false;

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
                <p className="text notice">
                    We kindly invite you to{" "}
                    <NavLink to="/login">log in</NavLink> for a smoother and
                    quicker experience.
                </p>
            )}

            <NameInput
                register={register}
                errors={errors}
                name={user.name}
                surname={user.surname}
            />
            <NumberOfGuestsInput register={register} errors={errors} />
            <ContactInput
                register={register}
                errors={errors}
                phone={user.phone}
                email={user.email}
            />
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
