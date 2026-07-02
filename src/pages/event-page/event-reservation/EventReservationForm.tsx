import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addTicket } from "../../../store";

import * as yup from "yup";

import dayjs from "dayjs";
import Button from "../../../components/buttons/button/Button";
import EmailInput from "../../../components/inputs/EmailInput";
import FirstNameInput from "../../../components/inputs/FirstNameInput";
import Form from "../../../components/form/Form";
import LastNameInput from "../../../components/inputs/LastNameInput";
import Notice from "../../../components/notice/Notice";
import NumberOfAdultsInput from "../../../components/inputs/NumberOfAdultsInput";
import NumberOfChildrenInput from "../../../components/inputs/NumberOfChildrenInput";
import PhoneInput from "../../../components/inputs/PhoneInput";

import type { Event, Ticket } from "@k7bart/restaurant-shared-types";

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
        .integer("Oh my! 😨")
        .typeError("Please enter a number"),
    email: yup
        .string()
        .email("Please provide a valid email address")
        .optional(),
    phone: yup
        .string()
        .required(
            "Please share your phone number. We'll only reach out if we have questions.",
        ),
});

type ReservationFormValues = yup.InferType<typeof reservationSchema>;

const EventReservationForm = ({ event }: { event: Event }) => {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const [ticket, setTicket] = useState<Ticket | null>(null);

    const methods = useForm<ReservationFormValues>({
        resolver: yupResolver(reservationSchema),
        defaultValues: {
            firstName: user?.firstName ?? "",
            lastName: user?.lastName ?? "",
            email: user ? user.email : "",
            phone: user ? user.phone : "",
        },
    });

    const onSubmit = ({
        numberOfAdults: adults,
        numberOfChildren: children,
    }: ReservationFormValues) => {
        const newTicket: Ticket = {
            id: crypto.randomUUID(),
            event,
            guests: {
                adults,
                children: children || undefined,
            },
        };

        if (user) {
            dispatch(addTicket(newTicket));
        }

        setTicket(newTicket);

        methods.reset();
    };

    if (ticket) {
        return (
            <Notice>
                <h4>Success!</h4>
                <p className="large">
                    We are waiting for you&nbsp;
                    {dayjs(event.date).format("DD/MM/YYYY")}
                    &nbsp;at&nbsp;
                    {dayjs(event.date).format("HH:mm")}
                </p>
                <div className="buttons-container">
                    <Button
                        size="small"
                        color="transparent"
                        onClick={() => setTicket(null)}
                    >
                        Buy one more
                    </Button>

                    <Link to="/profile#tickets">
                        <Button size="small" color="wisteria">
                            Check your tickets
                        </Button>
                    </Link>
                </div>
            </Notice>
        );
    }

    return (
        <FormProvider {...methods}>
            <Form onSubmit={onSubmit}>
                {!user && (
                    <p className="large">
                        We kindly invite you to
                        <NavLink to="/login" className="large wisteria">
                            &nbsp;log in&nbsp;
                        </NavLink>
                        for a smoother and quicker experience.
                    </p>
                )}

                <div>
                    <FirstNameInput required />
                    <LastNameInput />
                </div>

                <div>
                    <PhoneInput required />
                    <EmailInput />
                </div>

                {event.ageLimit === 18 && (
                    <div>
                        <NumberOfAdultsInput required />
                        <Button size="small" color="wisteria" type="submit">
                            Submit
                        </Button>
                    </div>
                )}

                {event.ageLimit !== 18 && (
                    <>
                        <div>
                            <NumberOfAdultsInput required />
                            <NumberOfChildrenInput />
                        </div>
                        <Button size="small" color="wisteria" type="submit">
                            Submit
                        </Button>
                    </>
                )}
            </Form>
        </FormProvider>
    );
};

export default EventReservationForm;
