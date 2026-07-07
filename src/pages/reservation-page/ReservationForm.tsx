import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { capitalize } from "../../utils/stringUtils";
import { combineDateTime } from "../../utils/timeUtils";
import { getAvailableDay } from "../../utils/dateUtils";
import { addMonths } from "date-fns";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";
import { addReservation } from "../../store";
import { timeSchema } from "../../components/inputs/yupInputsSchemas";

import * as yup from "yup";
import dayjs from "dayjs";

import Button from "../../components/buttons/button/Button";
import CustomLink from "../../components/links/custom-link/CustomLink";
import DateInput from "../../components/inputs/DateInput";
import EmailInput from "../../components/inputs/EmailInput";
import FirstNameInput from "../../components/inputs/FirstNameInput";
import Form from "../../components/form/Form";
import LastNameInput from "../../components/inputs/LastNameInput";
import Notice from "../../components/notice/Notice";
import NumberOfAdultsInput from "../../components/inputs/NumberOfAdultsInput";
import NumberOfChildrenInput from "../../components/inputs/NumberOfChildrenInput";
import PhoneInput from "../../components/inputs/PhoneInput";
import Text from "../../components/text/Text";
import Textarea from "../../components/textarea/Textarea";
import TimeInput from "../../components/inputs/TimeInput";

import type {
    Reservation,
    ReservationRequest,
} from "@k7bart/restaurant-shared-types";
import { reservationService } from "../../services/reservation-service";

const today = new Date();
const earliestAvailableDay = getAvailableDay();

const reservationSchema = yup.object({
    firstName: yup.string().required("Please provide your name"),
    lastName: yup.string().optional(),
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
        .max(50, "Maximum 50 children allowed")
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
            "Please share your phone number. We'll only reach out if we have questions",
        ),
    date: yup
        .date()
        .required("Please pick a date")
        .min(earliestAvailableDay, "Date cannot be earlier than today")
        .max(
            addMonths(today, 2),
            "Date cannot be later than 2 month from today",
        ),
    time: timeSchema,
    additionalRequirements: yup
        .string()
        .max(
            500,
            "Additional requirements cannot be longer than 500 characters",
        )
        .optional(),
});

type ReservationFormValues = yup.InferType<typeof reservationSchema>;

const ReservationForm = () => {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const { loginTo, loginState } = useAuthRedirect();
    const [reserved, setReserved] = useState<Reservation | null>(null);

    const methods = useForm({
        resolver: yupResolver(reservationSchema),
        mode: "onChange",
        defaultValues: {
            firstName: user?.firstName ?? "",
            lastName: user?.lastName ?? "",
            phone: user ? user.phone : "",
            email: user ? user.email : "",
            date: earliestAvailableDay,
        },
    });

    const onSubmit = async (data: ReservationFormValues) => {
        const {
            firstName,
            lastName,
            phone,
            email,
            numberOfAdults,
            numberOfChildren,
            date,
            time,
            additionalRequirements,
        } = data;

        const dateTime = combineDateTime(date, time);

        const payload: ReservationRequest = {
            dateTime,
            reservedBy: {
                id: user?.id ?? crypto.randomUUID(),
                firstName: capitalize(firstName),
                lastName: lastName ? capitalize(lastName) : undefined,
                phone,
                email: email || undefined,
            },
            guests: {
                adults: numberOfAdults,
                children: numberOfChildren || undefined,
            },
            additionalRequirements: additionalRequirements || undefined,
        };

        try {
            const { data: reservation } =
                await reservationService.createReservation(payload);

            if (user) dispatch(addReservation(reservation));

            setReserved(reservation);
            methods.reset();
        } catch (error) {
            console.error(error);
        }
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
                        reserved.dateTime,
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
                        <CustomLink
                            color="wisteria"
                            fontWeight="thin"
                            to={loginTo}
                            state={loginState}
                            size="large"
                        >
                            &nbsp;log in&nbsp;
                        </CustomLink>
                        for a smoother and quicker experience.
                    </Text>
                )}

                <div>
                    <FirstNameInput required />
                    <LastNameInput />
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
