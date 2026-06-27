import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../hooks";
import { useMe } from "../../hooks/useMe";
import { updateUserData } from "../../store/index";
import { capitalize } from "../../utils/stringUtils";

import * as yup from "yup";
import dayjs from "dayjs";

import Button from "../../components/buttons/button/Button";
import DateInput from "../../components/inputs/DateInput";
import EmailInput from "../../components/inputs/EmailInput";
import Form from "../../components/form/Form";
import NameInput from "../../components/inputs/NameInput";
import PhoneInput from "../../components/inputs/PhoneInput";
import SurnameInput from "../../components/inputs/SurnameInput";

import type { User } from "@k7bart/restaurant-shared-types";

const schema = yup.object({
    name: yup.string().required("Please provide your name"),
    surname: yup.string().optional(),
    email: yup
        .string()
        .email("Please provide a valid email address")
        .required("Please provide your email"),
    phone: yup.string().required("Please provide your phone number"),
    birthday: yup.date().nullable().optional(),
});

const PersonalData = () => {
    const { name, surname, email, phone, birthday } = useMe();

    const dispatch = useAppDispatch();

    const methods = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name,
            surname,
            email,
            phone,
            birthday: birthday ? dayjs(birthday).toDate() : null,
        },
    });

    const onSubmit = (data: User) => {
        const { name, surname } = data;

        const formattedData = {
            ...data,
            name: capitalize(name),
            surname: surname ? capitalize(surname) : undefined,
        };

        dispatch(updateUserData(formattedData));
    };

    return (
        <FormProvider {...methods}>
            <Form onSubmit={onSubmit}>
                <div>
                    <NameInput />

                    <SurnameInput />
                </div>

                <div>
                    <PhoneInput />

                    <EmailInput />
                </div>

                <div>
                    <DateInput
                        label="Birthday"
                        name="birthday"
                        minDate={new Date(1900, 0, 1)}
                    />

                    <Button size="small" color="wisteria" type="submit">
                        Save changes
                    </Button>
                </div>
            </Form>
        </FormProvider>
    );
};

export default PersonalData;
