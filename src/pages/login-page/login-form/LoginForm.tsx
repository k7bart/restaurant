import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { setUser } from "../../../store";
import { authService } from "../../../services/auth-service";
import { useAppDispatch } from "../../../hooks";
import { useAuthRedirect } from "../../../hooks/useAuthRedirect";
import { formatPhoneForApi } from "../../../utils/phoneUtils";
import { phoneSchema } from "../../../components/inputs/yupInputsSchemas";
import * as yup from "yup";

import Button from "../../../components/buttons/button/Button";
import CustomLink from "../../../components/links/custom-link/CustomLink";
import Form from "../../../components/form/Form";
import LabeledCheckbox from "../../../components/labeled-checkbox/LabeledCheckbox";
import PasswordInput from "../../../components/inputs/PasswordInput";
import PhoneInput from "../../../components/inputs/PhoneInput";
import Text from "../../../components/text/Text";
import styles from "./LoginForm.module.scss";

import type { LoginCredentials } from "@k7bart/restaurant-shared-types";

const loginSchema = yup.object({
    phone: phoneSchema,
    password: yup.string().required("Please provide your password"),
    rememberMe: yup.boolean().optional(),
});

const LoginForm = () => {
    const dispatch = useAppDispatch();
    const { navigateAfterAuth } = useAuthRedirect();

    const methods = useForm({
        resolver: yupResolver(loginSchema),
    });

    const { reset } = methods;

    const onSubmit = async (data: LoginCredentials) => {
        try {
            const { data: user } = await authService.login({
                ...data,
                phone: formatPhoneForApi(data.phone),
            });
            dispatch(setUser(user));
            reset();
            navigateAfterAuth();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <FormProvider {...methods}>
            <Form onSubmit={onSubmit}>
                <PhoneInput required />

                <PasswordInput required autoComplete="current-password" />

                <div className={styles.container}>
                    <LabeledCheckbox
                        fieldName="rememberMe"
                        label="Remember me"
                    />

                    <CustomLink
                        color="wisteria"
                        target="_self"
                        to="#"
                        size="large"
                    >
                        Forgot password?
                    </CustomLink>
                </div>

                <Button size="small" color="wisteria" type="submit">
                    Login
                </Button>

                <Text align="center" size="large">
                    Don&apos;t have an account yet?&nbsp;
                    <CustomLink
                        color="wisteria"
                        target="_self"
                        to="/registration"
                        size="large"
                    >
                        Register
                    </CustomLink>
                </Text>
            </Form>
        </FormProvider>
    );
};

export default LoginForm;
