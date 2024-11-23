import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../../../common/components/buttons/Button/Button";
import EmailInput from "../../../components/Inputs/EmailInput";
import Form from "../../../components/form/Form";
import LabeledCheckbox from "../../../components/LabeledCheckbox/LabeledCheckbox";
import LinkComponent from "../../../components/links/LinkComponent/LinkComponent";
import PasswordInput from "../../../components/Inputs/PasswordInput";
import Text from "../../../components/Text/Text";

import styles from "./LoginForm.module.scss";

const reservationSchema = yup.object({
    email: yup
        .string()
        .email("Please provide a valid email address")
        .required("Please provide your email"),
    password: yup.string().required("Please provide your password"),
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
        <Form onSubmit={handleSubmit(onSubmit)}>
            <EmailInput
                register={register}
                error={errors.email}
                required={true}
            />

            <PasswordInput register={register} error={errors.password} />

            <div className={styles.container}>
                <LabeledCheckbox text="Remember me" register={register} />

                <LinkComponent
                    color="wisteria"
                    target="_self"
                    to="#"
                    size="large"
                >
                    Forgot password?
                </LinkComponent>
            </div>

            <Button size="small" color="wisteria" type="submit">
                Login
            </Button>

            <Text align="center" size="large">
                Don&apos;t have an account yet?&nbsp;
                <LinkComponent
                    color="wisteria"
                    target="_self"
                    to="/registration"
                    size="large"
                >
                    Register
                </LinkComponent>
            </Text>
        </Form>
    );
};

export default LoginForm;
