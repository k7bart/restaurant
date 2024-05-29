import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { updateUserData } from "../../../store/index";
import { capitalizeFirstLetters } from "../../../utils/stringUtils";

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

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: user.name,
            surname: user.surname,
            email: user.email,
            phone: user.phone,
            birthday: user.birthday || null,
        },
    });

    useEffect(() => {
        reset({
            name: user.name,
            surname: user.surname,
            email: user.email,
            phone: user.phone,
            birthday: user.birthday || null,
        });
    }, [user, reset]);

    const onSubmit = (data) => {
        const formattedData = {
            ...data,
            name: capitalizeFirstLetters(data.name),
            surname: capitalizeFirstLetters(data.surname),
            birthday: data.birthday ? data.birthday.toISOString() : null,
        };
        console.log(formattedData);
        dispatch(updateUserData(formattedData));
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
