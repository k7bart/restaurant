import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { capitalize } from "../../../utils/stringUtils";
import { combineDateTime } from "../../../utils/timeUtils";
import { subDays, addMonths } from "date-fns";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addReservation } from "../../../store";
import { timeSchema } from "../../components/Inputs/yupInputsSchemas";

import * as yup from "yup";
import dayjs from "dayjs";

import Button from "../../../common/components/buttons/Button/Button";
import DateInput from "../../components/Inputs/DateInput";
import EmailInput from "../../components/Inputs/EmailInput";
import Form from "../../components/form/Form";
import LinkComponent from "../../components/links/LinkComponent/LinkComponent";
import NameInput from "../../components/Inputs/NameInput";
import Notice from "../../components/Notice/Notice";
import NumberOfAdultsInput from "../../components/Inputs/NumberOfAdultsInput";
import NumberOfChildrenInput from "../../components/Inputs/NumberOfChildrenInput";
import PhoneInput from "../../components/Inputs/PhoneInput";
import SurnameInput from "../../components/Inputs/SurnameInput";
import Text from "../../components/Text/Text";
import Textarea from "../../components/textarea/Textarea";
import TimeInput from "../../components/Inputs/TimeInput";

import type {
    Reservation,
    ReservationForm,
} from "@k7bart/restaurant-shared-types";

const today = new Date();

const reservationSchema = yup.object({
    name: yup.string().required("Please provide your name"),
    numberOfAdults: yup
        .number()
        .transform((value, originalValue) => {
            return originalValue === "" ? 0 : value;
        })
        .required("Please provide the number of adult guests")
        .positive("At least one adult needed")
        .integer("Oh my! 😨")
        .typeError("Please enter a number"),
    numberOfChildren: yup
        .number()
        .transform((value, originalValue) => {
            return originalValue === "" ? 0 : value;
        })
        .min(0, "Children are the joy of life")
        .integer("Oh my! 😨")
        .typeError("Please enter a number"),
    email: yup
        .string()
        .email("Please provide a valid email address")
        .optional(),
    // todo: add better phone validation
    phone: yup
        .string()
        .required(
            "Please share your phone number. We'll only reach out if we have questions"
        ),
    date: yup
        .date()
        .required("Please pick a date")
        .min(subDays(today, 1), "Date cannot be earlier than today")
        .max(
            addMonths(today, 2),
            "Date cannot be later than 2 month from today"
        ),
    time: timeSchema,
    additionalRequirements: yup.string(),
});

const ReservationForm = () => {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const [reserved, setReserved] = useState<Reservation | null>(null);

    const methods = useForm({
        resolver: yupResolver(reservationSchema),
        mode: "onChange",
        defaultValues: {
            name: user ? `${user.name} ${user.surname}` : "",
            phone: user ? user.phone : "",
            email: user ? user.email : "",
            date: today,
        },
    });

    const onSubmit = (data: ReservationForm) => {
        const { reservedBy, date, time, ...rest } = data;

        const dateTime = combineDateTime(date, time);

        const reservation: Reservation = {
            id: crypto.randomUUID(),
            dateTime,
            reservedBy: {
                ...reservedBy,
                name: capitalize(reservedBy.name),
                surname: reservedBy.surname && capitalize(reservedBy.surname),
            },
            status: "new",
            ...rest,
        };

        dispatch(addReservation(reservation));

        setReserved(reservation);
        methods.reset();
    };

    if (reserved)
        return (
            <Notice>
                <h4>Table successfully reserved!</h4>

                <Text size="large">
                    We are waiting for you&nbsp;
                    {dayjs(reserved.dateTime).format("DD/MM/YYYY")}
                    &nbsp;at&nbsp;
                    {`${dayjs(reserved.dateTime).get("hours")}:${dayjs(
                        reserved.dateTime
                    ).get("minutes")}`}
                </Text>

                <div className="buttons-container">
                    <Button
                        color="transparent"
                        onClick={() => setReserved(null)}
                        size="small"
                    >
                        Make another one
                    </Button>

                    <Link to="/profile#table-reservations">
                        <Button size="small" color="wisteria">
                            Check my reservations
                        </Button>
                    </Link>
                </div>
            </Notice>
        );

    return (
        <FormProvider {...methods}>
            <Form onSubmit={onSubmit}>
                {!user && (
                    <Text size="large">
                        We kindly invite you to
                        <LinkComponent
                            color="wisteria"
                            fontWeight="thin"
                            to="/login"
                            size="large"
                        >
                            &nbsp;log in&nbsp;
                        </LinkComponent>
                        for a smoother and quicker experience.
                    </Text>
                )}

                <div>
                    <NameInput required />
                    <SurnameInput />
                </div>

                <div>
                    <PhoneInput required />
                    <EmailInput />
                </div>

                <div>
                    <NumberOfAdultsInput required />
                    <NumberOfChildrenInput />
                </div>

                <div>
                    <DateInput required />
                    <TimeInput required />
                </div>

                <Textarea
                    fieldName="additionalRequirements"
                    label="Additional requirements"
                />

                <Button size="small" color="wisteria" type="submit">
                    Submit
                </Button>
            </Form>
        </FormProvider>
    );
};

export default ReservationForm;
