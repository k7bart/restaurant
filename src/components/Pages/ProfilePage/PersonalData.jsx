import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateUserData } from "../../../store/index";
import { capitalize } from "../../../utils/stringUtils";

import * as yup from "yup";

import AccordionItem from "./AccordionItem";
import BirthdayInput from "../../Inputs/BirthdayInput";
import EmailInput from "../../Inputs/EmailInput";
import NameInput from "../../Inputs/NameInput";
import PhoneInput from "../../Inputs/PhoneInput";
import SurnameInput from "../../Inputs/SurnameInput";

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
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: name,
            surname: surname,
            email: email,
            phone: phone,
            birthday: birthday,
        },
    });

    const onSubmit = (data) => {
        const { name, surname, birthday } = data;
        const formattedData = {
            ...data,
            name: capitalize(name),
            surname: capitalize(surname),
            birthday: birthday ? birthday.toISOString() : null,
        };
        dispatch(updateUserData(formattedData));
        reset();
    };

    return (
        <AccordionItem title="Personal data">
            <form onSubmit={handleSubmit(onSubmit)}>
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

                    <button type="submit" className="submit small color">
                        Save changes
                    </button>
                </div>
            </form>
        </AccordionItem>
    );
};

export default PersonalData;
