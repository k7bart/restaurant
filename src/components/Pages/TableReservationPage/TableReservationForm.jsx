import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const reservationSchema = yup.object({
    name: yup.string().required(),
    numberOfAdults: yup.number().required().positive().integer(),
    email: yup.string().email(),
    phone: yup.string().required(), // add better phone validation
    date: yup.date().min(new Date(), "Date must be later than today"),
    time: yup.string().required(), // push time value to date?
    numberOfChildren: yup
        .number()
        .transform((value, originalValue) => {
            return originalValue === "" ? 0 : value;
        })
        .min(0)
        .integer(),
    additionalRequirements: yup.string(),
});

const ReservationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(reservationSchema),
    });

    const onSubmit = (data) => console.log(data);

    const errorMap = {
        name: errors.name && <p className="error">Please provide your name</p>,
        numberOfAdults: errors.numberOfAdults && (
            <p className="error">Please provide the number of adult guests.</p>
        ),
        numberOfChildren: errors.numberOfChildren && (
            <p className="error">{errors.numberOfChildren.message}</p>
        ),
        email: errors.email && <p className="error">{errors.email.message}</p>,
        phone: errors.phone && (
            <p className="error">
                Please share your phone number. We'll only reach out if we have
                questions.
            </p>
        ),
        date: errors.date && (
            <p className="error">
                Please provide the date of your visit. {errors.date.message}
            </p>
        ),
        time: errors.time && <p className="error">{errors.time.message}</p>,
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <label>
                <p>Name</p>
                <input {...register("name")} />
                {errorMap.name}
            </label>
            <div>
                <label>
                    <p>Number of adults</p>
                    <input {...register("numberOfAdults", { min: 1 })} />
                    {errorMap.numberOfAdults}
                </label>
                <label>
                    <p>Number of children</p>
                    <input {...register("numberOfChildren")} />
                    {errorMap.numberOfChildren}
                </label>
            </div>
            <div>
                <label>
                    <p>Email</p>
                    <input {...register("email")} />
                    {errorMap.email}
                </label>
                <label>
                    <p>Phone</p>
                    <input type="tel" {...register("phone")} />
                    {errorMap.phone}
                </label>
            </div>
            <div>
                <label>
                    <p>Date</p>
                    <input {...register("date")} placeholder="MM.DD.YY" />
                    {errorMap.date}
                </label>
                <label>
                    <p>Time</p>
                    <input {...register("time")} />
                    {errorMap.time}
                </label>
            </div>
            <label>
                <p>Additional requirements</p>
                <textarea {...register("additionalRequirements")} />
            </label>

            <input type="submit" className="submit" />
        </form>
    );
};

export default ReservationForm;
