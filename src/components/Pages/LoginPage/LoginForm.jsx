import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const reservationSchema = yup.object({
    email: yup.string().email().required(),
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
            <label>
                <p>E-mail</p>
                <input {...register("email")} type="text" />
                {errors.email && (
                    <p className="error">Please provide the valid e-mail</p>
                )}
            </label>

            <label>
                <p>Password</p>
                <input {...register("password")} type="text" />
                {errors.password && (
                    <p className="error">Please provide your password</p>
                )}
            </label>

            <div>
                <label className="checkbox">
                    {/* todo: make controlled */}
                    <input type="checkbox" />
                    <p>Remember me</p>
                </label>

                <a href="#" className="link">
                    Forgot password?
                </a>
            </div>

            <button className="submit" type="sumbit">
                Login
            </button>
        </form>
    );
};

export default LoginForm;
