import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { capitalize } from "../../../utils/stringUtils";
import { combineDateTime } from "../../../utils/timeUtils";
import { subDays, addMonths } from "date-fns";
import { addReservation, addReservationId } from "../../../store";
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
import Text from "../../components/Text/Text";
import TimeInput from "../../components/Inputs/TimeInput";

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
    // add better phone validation
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
    const user = useSelector((state) => state.user) || null;
    const dispatch = useDispatch();
    const [reservedTable, setReservedTable] = useState(null);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(reservationSchema),
        mode: "onChange",
        defaultValues: {
            name: user ? `${user.name} ${user.surname}` : "",
            numberOfAdults: "",
            numberOfChildren: "",
            phone: user ? user.phone : "",
            email: user ? user.email : "",
            date: today,
            time: "",
            additionalRequirements: "",
        },
    });

    const onSubmit = (data) => {
        const {
            name,
            numberOfAdults: adults,
            numberOfChildren: children,
            phone,
            email,
            date,
            time,
            additionalRequirements,
        } = data;

        const reservedBy = {
            id: user ? user.id : null,
            name: capitalize(name),
            phone: phone,
            email: email || null,
        };

        const dateTime = combineDateTime(date, time);

        const reservation = {
            id: 6, // add proper id
            dateTime,
            code: undefined,
            status: "new",
            guests: { adults, children },
            reservedBy,
            additionalRequirements,
        };

        dispatch(addReservation(reservation));
        user && dispatch(addReservationId(reservation.id));

        setReservedTable(reservation);
        reset();
    };

    return reservedTable ? (
        <Notice>
            <h4>Table successfully reserved!</h4>

            <Text size="large">
                We are waiting for you&nbsp;
                {dayjs(reservedTable.date).format("DD/MM/YYYY")}
                &nbsp;at&nbsp;
                {`${dayjs(reservedTable.date).get("hours")}:${dayjs(
                    reservedTable.date
                ).get("minutes")}`}
            </Text>

            <div className="buttons-container">
                <Button
                    color="transparent"
                    onClick={() => setReservedTable(null)}
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
    ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
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

            <div>
                <DateInput
                    control={control}
                    error={errors.date}
                    required={true}
                />

                <TimeInput control={control} error={errors.time} />
            </div>

            <label>
                <p>Additional requirements</p>
                <textarea {...register("additionalRequirements")} />
            </label>

            <Button size="small" color="wisteria" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default ReservationForm;
