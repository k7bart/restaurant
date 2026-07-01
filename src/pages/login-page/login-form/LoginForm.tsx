import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { setUser } from "../../../store";
import { useAppDispatch } from "../../../hooks";
import * as yup from "yup";
import Button from "../../../components/buttons/button/Button";
import CustomLink from "../../../components/links/custom-link/CustomLink";
import EmailInput from "../../../components/inputs/EmailInput";
import Form from "../../../components/form/Form";
import LabeledCheckbox from "../../../components/labeled-checkbox/LabeledCheckbox";
import PasswordInput from "../../../components/inputs/PasswordInput";
import Text from "../../../components/text/Text";
import styles from "./LoginForm.module.scss";
import type { User, LoginCredentials } from "@k7bart/restaurant-shared-types";

const reservationSchema = yup.object({
    email: yup
        .string()
        .email("Please provide a valid email address")
        .required("Please provide your email"),
    password: yup.string().required("Please provide your password"),
});

const defaultUser: User = {
    id: "300837",
    name: "Bob",
    surname: "Bobert",
    email: "b0bert@gmail.com",
    password: "",
    refferalLink: "",
    referralPromoCode: "",
    phone: "+38(064)54-09-154",
    orders: [],
    addresses: [
        {
            apartment: "7",
            city: "Lviv",
            entrance: "1",
            floor: "4",
            house: "85",
            id: "dzherelna85/7",
            street: "Dzherelna",
            isCurrent: false,
            addressComment: "",
        },
        {
            city: "Khmelnytskyi",
            house: "87",
            id: "chornovola87",
            street: "Chornovola",
            isCurrent: false,
            addressComment: "",
        },
        {
            city: "Lviv",
            house: "87",
            id: "chornovola87/16",
            street: "Chornovola",
            isCurrent: false,
            addressComment: "",
        },
    ],
    reservations: [
        {
            id: "1",
            dateTime: new Date(),
            status: "new",
            guests: {
                adults: 2,
            },
            reservedBy: {
                id: "300837",
                name: "Bob",
                phone: "+38(064)54-09-154",
            },
        },
    ],
    tickets: [],
};

const LoginForm = () => {
    const dispatch = useAppDispatch();

    const methods = useForm({
        resolver: yupResolver(reservationSchema),
    });

    const onSubmit = (data: LoginCredentials) => {
        console.log(data);
        dispatch(setUser(defaultUser));
    };

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
