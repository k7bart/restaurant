import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import EmailInput from "../../Inputs/EmailInput";

const reservationSchema = yup.object({
    email: yup
        .string()
        .email("Please provide a valid email address")
        .required("Please provide your email"),
    password: yup.string().required(),
});

const LoginForm = () => {
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
            <EmailInput register={register} error={errors.email} />

            <label>
                <p>Password</p>
                <input {...register("password")} type="password" />
                {errors.password && (
                    <p className="error">Please provide your password</p>
                )}
            </label>

            <div className="container">
                <label className="checkbox">
                    {/* todo: make controlled */}
                    <input type="checkbox" />
                    <p className="large">Remember me</p>
                </label>

                <a href="#" className="large wisteria">
                    Forgot password?
                </a>
            </div>

            <button className="submit small color" type="submit">
                Login
            </button>
        </form>
    );
};

export default LoginForm;
