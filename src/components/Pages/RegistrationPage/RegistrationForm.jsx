import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import ContactInput from "../../Inputs/ContactInput";
import NameInput from "../../Inputs/NameInput";

const reservationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
});

const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(reservationSchema),
    });

    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <NameInput register={register} errors={errors} />
            <ContactInput register={register} errors={errors} />

            <div>
                <label>
                    <p>Password</p>
                    <input {...register("password")} type="password" />
                    {errors.password && (
                        <p className="error">Please provide your password</p>
                    )}
                </label>

                <label>
                    <p>Confirm password</p>
                    <input {...register("confirmPassword")} type="password" />
                    {errors.password && (
                        <p className="error">Please provide your password</p>
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

            <button className="submit" type="sumbit">
                Login
            </button>
        </form>
    );
};

export default RegistrationForm;
