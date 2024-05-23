import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { capitalizeFirstLetter } from "../../../utils/stringUtils";
import * as yup from "yup";

import ContactInput from "../../Inputs/ContactInput";

const registrationSchema = yup.object({
    name: yup.string().required("Please provide your name"),
    surname: yup.string().optional(),
    email: yup
        .string()
        .email("Please provide a valid email address")
        .optional(),
    // todo: add phone validation
    phone: yup.string().required("Please provide your phone number"),
    password: yup
        .string()
        .required("Please provide your password")
        .test(
            "is-valid-length",
            "The password must be at least 8 characters long",
            (value) => !value || value.length >= 8
        ),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
});

const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registrationSchema),
    });

    const onSubmit = (data) => {
        const formattedData = {
            ...data,
            name: capitalizeFirstLetter(data.name),
            surname: capitalizeFirstLetter(data.surname),
        };
        console.log(formattedData);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>
                    <p>Name</p>
                    <input {...register("name")} type="text" />
                    {errors.name && (
                        <p className="error">{errors.name.message}</p>
                    )}
                </label>
                <label>
                    <p>Surname</p>
                    <input {...register("surname")} type="text" />
                    {errors.surname && (
                        <p className="error">{errors.surname.message}</p>
                    )}
                </label>
            </div>
            <ContactInput register={register} errors={errors} />

            <div>
                <label>
                    <p>Password</p>
                    <input {...register("password")} type="password" />
                    {errors.password && (
                        <p className="error">{errors.password.message}</p>
                    )}
                </label>

                <label>
                    <p>Confirm password</p>
                    <input {...register("confirmPassword")} type="password" />
                    {errors.confirmPassword && (
                        <p className="error">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                </label>
            </div>

            <div className="container">
                <label className="checkbox">
                    {/* todo: make controlled */}
                    <input type="checkbox" />
                    <p className="large">Remember me</p>
                </label>
            </div>

            <button className="submit" type="submit">
                Login
            </button>
        </form>
    );
};

export default RegistrationForm;
