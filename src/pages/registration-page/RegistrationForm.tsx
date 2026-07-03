import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store";
import { authService } from "../../services/auth-service";
import { useAppDispatch } from "../../hooks";
import { capitalize } from "../../utils/stringUtils";
import { formatPhoneForApi } from "../../utils/phoneUtils";
import { phoneSchema } from "../../components/inputs/yupInputsSchemas";
import * as yup from "yup";

import Button from "../../components/buttons/button/Button";
import CustomLink from "../../components/links/custom-link/CustomLink";
import EmailInput from "../../components/inputs/EmailInput";
import FirstNameInput from "../../components/inputs/FirstNameInput";
import Form from "../../components/form/Form";
import Input from "../../components/inputs/input/Input";
import LabeledCheckbox from "../../components/labeled-checkbox/LabeledCheckbox";
import PhoneInput from "../../components/inputs/PhoneInput";
import PasswordInput from "../../components/inputs/PasswordInput";
import LastNameInput from "../../components/inputs/LastNameInput";
import Text from "../../components/text/Text";

const registrationSchema = yup.object({
    firstName: yup.string().required("Please provide your name"),
    lastName: yup.string().optional(),
    email: yup
        .string()
        .email("Please provide a valid email address")
        .required("Please provide your email"),
    phone: phoneSchema,
    password: yup
        .string()
        .required("Please provide your password")
        .test(
            "is-valid-length",
            "The password must be at least 8 characters long",
            (value) => !value || value.length >= 8,
        )
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d).+$/,
            "Password must contain at least one letter and one number",
        ),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Please confirm your password"),
    rememberMe: yup.boolean().optional(),
});

type RegistrationFormValues = yup.InferType<typeof registrationSchema>;

const RegistrationForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const methods = useForm<RegistrationFormValues>({
        resolver: yupResolver(registrationSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
            rememberMe: false,
        },
    });

    const { reset } = methods;

    const onSubmit = async (data: RegistrationFormValues) => {
        const { firstName, lastName, phone, email, password, rememberMe } =
            data;

        try {
            const { data: user } = await authService.signup({
                firstName: capitalize(firstName),
                lastName: lastName && capitalize(lastName),
                phone: formatPhoneForApi(phone),
                email: email.toLowerCase(),
                password,
                rememberMe,
            });
            dispatch(setUser(user));
            reset();
            navigate("/profile");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <FormProvider {...methods}>
            <Form onSubmit={onSubmit}>
                <div>
                    <FirstNameInput required autoComplete="given-name" />

                    <LastNameInput autoComplete="family-name" />
                </div>

                <div>
                    <PhoneInput required autoComplete="tel" />

                    <EmailInput autoComplete="email" />
                </div>

                <div>
                    <PasswordInput autoComplete="new-password" />

                    <Input
                        autoComplete="new-password"
                        fieldName="confirmPassword"
                        label="Confirm password"
                        required
                        type="password"
                    />
                </div>

                <LabeledCheckbox fieldName="rememberMe" label="Remember me" />

                <Button size="small" color="wisteria" type="submit">
                    Register
                </Button>

                <Text align="center" size="large">
                    Already registered?&nbsp;
                    <CustomLink color="wisteria" to="/login" size="large">
                        Sign in
                    </CustomLink>
                </Text>
            </Form>
        </FormProvider>
    );
};

export default RegistrationForm;
