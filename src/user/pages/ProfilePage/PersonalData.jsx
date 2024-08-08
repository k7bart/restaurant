import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateUserData } from "../../../store/index";
import { capitalize } from "../../../utils/stringUtils";

import * as yup from "yup";
import dayjs from "dayjs";

import BirthdayInput from "../../components/Inputs/BirthdayInput";
import Button from "../../../common/components/buttons/Button/Button";
import EmailInput from "../../components/Inputs/EmailInput";
import Form from "../../components/Form/Form";
import NameInput from "../../components/Inputs/NameInput";
import PhoneInput from "../../components/Inputs/PhoneInput";
import SurnameInput from "../../components/Inputs/SurnameInput";

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

const PersonalData = ({ user }) => {
    const dispatch = useDispatch();
    const { name, surname, email, phone, birthday } = user;

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name,
            surname,
            email,
            phone,
            birthday: birthday ? dayjs(birthday).toDate() : null,
        },
    });

    const onSubmit = (data) => {
        const formattedData = {
            ...data,
            name: capitalize(data.name),
            surname: capitalize(data.surname),
            birthday: data.birthday ? dayjs(data.birthday).toISOString() : null,
        };
        dispatch(updateUserData(formattedData));
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <NameInput register={register} error={errors.name} />
                <SurnameInput register={register} error={errors.surname} />
            </div>
            <div>
                <PhoneInput register={register} error={errors.phone} />
                <EmailInput register={register} error={errors.email} />
            </div>
            <div>
                <BirthdayInput control={control} error={errors.birthday} />
                <Button size="small" color="wisteria" type="submit">
                    Save changes
                </Button>
            </div>
        </Form>
    );
};

export default PersonalData;
