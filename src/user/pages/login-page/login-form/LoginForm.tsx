import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { type LoginCredentials } from "@k7bart/restaurant-shared-types";

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
    const methods = useForm({
        resolver: yupResolver(reservationSchema),
    });

    const onSubmit = (data: LoginCredentials) => console.log(data);

    return (
        <FormProvider {...methods}>
            <Form onSubmit={onSubmit}>
                <EmailInput required />

                <PasswordInput />

                <div className={styles.container}>
                    <LabeledCheckbox
                        fieldName="rememberMe"
                        label="Remember me"
                    />

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
        </FormProvider>
    );
};

export default LoginForm;
