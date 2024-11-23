import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { capitalize } from "../../../utils/stringUtils";
import * as yup from "yup";

import Button from "../../../common/components/buttons/Button/Button";
import EmailInput from "../../components/Inputs/EmailInput";
import Form from "../../components/form/Form";
import LabeledCheckbox from "../../components/LabeledCheckbox/LabeledCheckbox";
import LinkComponent from "../../components/links/LinkComponent/LinkComponent";
import NameInput from "../../components/Inputs/NameInput";
import PhoneInput from "../../components/Inputs/PhoneInput";
import PasswordInput from "../../components/Inputs/PasswordInput";
import SurnameInput from "../../components/Inputs/SurnameInput";
import Text from "../../components/Text/Text";

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
        reset,
    } = useForm({
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

    const onSubmit = (data) => {
        const formattedData = {
            ...data,
            name: capitalize(data.name),
            surname: capitalize(data.surname),
        };
        console.log(formattedData);
        reset();
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <NameInput
                    register={register}
                    error={errors.name}
                    required={true}
                />

                <SurnameInput register={register} surname={errors.surname} />
            </div>

            <div>
                <PhoneInput register={register} error={errors.phone} />

                <EmailInput
                    register={register}
                    error={errors.email}
                    required={true}
                />
            </div>

            <div>
                <PasswordInput register={register} error={errors.password} />

                <label>
                    <Text>Confirm password</Text>

                    <input {...register("confirmPassword")} type="password" />

                    {errors.confirmPassword && (
                        <p className="error">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                </label>
            </div>

            <LabeledCheckbox text="Remember me" register={register} />

            <Button size="small" color="wisteria" type="submit">
                Register
            </Button>

            <Text align="center" size="large">
                Already registered?&nbsp;
                <LinkComponent color="wisteria" to="/login" size="large">
                    Sign in
                </LinkComponent>
            </Text>
        </Form>
    );
};

export default RegistrationForm;
