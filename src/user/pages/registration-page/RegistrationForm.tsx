import { type FocusEvent } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkEmailUsed } from "../../../services/user/user";
import { capitalize } from "../../utils/stringUtils";
import * as yup from "yup";

import Button from "../../../components/buttons/Button/Button";
import CustomLink from "../../components/links/custom-link/CustomLink";
import EmailInput from "../../components/Inputs/EmailInput";
import Form from "../../components/form/Form";
import Input from "../../components/Inputs/Input/Input";
import LabeledCheckbox from "../../components/LabeledCheckbox/LabeledCheckbox";
import NameInput from "../../components/Inputs/NameInput";
import PhoneInput from "../../components/Inputs/PhoneInput";
import PasswordInput from "../../components/Inputs/PasswordInput";
import SurnameInput from "../../components/Inputs/SurnameInput";
import Text from "../../components/text/Text";

import { RegistrationData } from "@k7bart/restaurant-shared-types";

const registrationSchema = yup.object({
    name: yup.string().required("Please provide your name"),
    surname: yup.string().optional(),
    email: yup
        .string()
        .email("Please provide a valid email address")
        .required("Please provide your email"),
    // todo: add phone validation
    phone: yup.string().required("Please provide your phone number"),
    password: yup
        .string()
        .required("Please provide your password")
        .test(
            "is-valid-length",
            "The password must be at least 8 characters long",
            (value) => !value || value.length >= 8,
        ),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Please confirm your password"),
});

const RegistrationForm = () => {
    const methods = useForm<RegistrationData>({
        resolver: yupResolver(registrationSchema),
        defaultValues: {
            name: "",
            surname: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
            rememberMe: false,
        },
    });

    const {
        reset,
        setError,
        clearErrors,
        formState: { errors },
    } = methods;

    const onSubmit = (data: RegistrationData) => {
        const formattedData = {
            ...data,
            name: capitalize(data.name),
            surname: data.surname && capitalize(data.surname),
        };
        console.log(formattedData);
        reset();
    };

    const handleEmailBlur = async ({
        target,
    }: FocusEvent<HTMLInputElement>) => {
        if (errors.email) return;

        (await checkEmailUsed(target.value)) &&
            setError("email", { message: "Email is already registered" });
    };

    return (
        <FormProvider {...methods}>
            <Form onSubmit={onSubmit}>
                <div>
                    <NameInput required />

                    <SurnameInput />
                </div>

                <div>
                    <PhoneInput required />

                    <EmailInput required onBlur={handleEmailBlur} />
                </div>

                <div>
                    <PasswordInput />

                    <Input
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
