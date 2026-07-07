import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../hooks";
import { useMe } from "../../hooks/useMe";
import { setUser } from "../../store/index";
import { authService } from "../../services/auth-service";
import { phoneSchema } from "../../components/inputs/yupInputsSchemas";

import * as yup from "yup";
import dayjs from "dayjs";

import Button from "../../components/buttons/button/Button";
import DateInput from "../../components/inputs/DateInput";
import EmailInput from "../../components/inputs/EmailInput";
import FirstNameInput from "../../components/inputs/FirstNameInput";
import Form from "../../components/form/Form";
import LastNameInput from "../../components/inputs/LastNameInput";
import PhoneInput from "../../components/inputs/PhoneInput";

const schema = yup.object({
    firstName: yup.string().required("Please provide your name"),
    lastName: yup.string().optional(),
    email: yup
        .string()
        .email("Please provide a valid email address")
        .optional(),
    phone: phoneSchema,
    birthday: yup.date().nullable().optional(),
});

type FormValues = yup.InferType<typeof schema>;

const PersonalData = () => {
    const { firstName, lastName, email, phone, birthday } = useMe();

    const dispatch = useAppDispatch();

    const methods = useForm<FormValues>({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName,
            lastName,
            email,
            phone,
            birthday: birthday ? dayjs(birthday).toDate() : undefined,
        },
    });

    const onSubmit = async (data: FormValues) => {
        try {
            const { data: user } = await authService.updateMe({
                ...data,
                birthday: data.birthday ?? undefined,
            });
            dispatch(setUser(user));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <FormProvider {...methods}>
            <Form onSubmit={onSubmit}>
                <div>
                    <FirstNameInput />

                    <LastNameInput />
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

                    <Button size="small" color="primary" type="submit">
                        Save changes
                    </Button>
                </div>
            </Form>
        </FormProvider>
    );
};

export default PersonalData;
