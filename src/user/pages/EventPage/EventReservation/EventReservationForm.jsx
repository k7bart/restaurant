import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { capitalize } from "../../../../utils/stringUtils";

import * as yup from "yup";

import dayjs from "dayjs";
import Button from "../../../../common/components/buttons/Button/Button";
import EmailInput from "../../../components/Inputs/EmailInput";
import Form from "../../../components/Form/Form";
import NameInput from "../../../components/Inputs/NameInput";
import Notice from "../../../components/Notice/Notice";
import NumberOfAdultsInput from "../../../components/Inputs/NumberOfAdultsInput";
import NumberOfChildrenInput from "../../../components/Inputs/NumberOfChildrenInput";
import PhoneInput from "../../../components/Inputs/PhoneInput";
import { addTicket } from "../../../../store";

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
    phone: yup
        .string()
        .required(
            "Please share your phone number. We'll only reach out if we have questions."
        ),
});

const EventReservationForm = ({ event }) => {
    const user = useSelector((state) => state.user) || null;
    const dispatch = useDispatch();
    const [ticket, setTicket] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(reservationSchema),
        defaultValues: {
            name: user ? user.fullName : "",
            numberOfAdults: "",
            email: user ? user.email : "",
            phone: user ? user.phone : "",
            numberOfChildren: "",
        },
    });

    const onSubmit = ({
        name,
        email,
        numberOfAdults: adults,
        numberOfChildren: children,
        phone,
    }) => {
        const ticket = {
            id: 123456, // fix id number
            eventId: event.id,
            guests: { adults, children },
            owner: { name: capitalize(name), email, phone },
        };

        user && dispatch(addTicket(ticket));

        setTicket(ticket);

        reset();
    };

    return ticket ? (
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
    ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {!user && (
                <p className="large">
                    We kindly invite you to
                    <NavLink to="/login" className="large wisteria">
                        &nbsp;log in&nbsp;
                    </NavLink>
                    for a smoother and quicker experience.
                </p>
            )}

            <NameInput
                register={register}
                error={errors.name}
                required={true}
            />

            <div>
                <PhoneInput
                    register={register}
                    error={errors.phone}
                    required={true}
                />
                <EmailInput register={register} error={errors.email} />
            </div>

            {event.ageLimit === 18 && (
                <div>
                    <NumberOfAdultsInput
                        register={register}
                        error={errors.numberOfAdults}
                        required={true}
                    />

                    <Button size="small" color="wisteria" type="submit">
                        Submit
                    </Button>
                </div>
            )}

            {event.ageLimit !== 18 && (
                <>
                    <div>
                        <NumberOfAdultsInput
                            register={register}
                            error={errors.numberOfAdults}
                            required={true}
                        />
                        <NumberOfChildrenInput
                            register={register}
                            error={errors.numberOfChildren}
                        />
                    </div>

                    <Button size="small" color="wisteria" type="submit">
                        Submit
                    </Button>
                </>
            )}
        </Form>
    );
};

export default EventReservationForm;
