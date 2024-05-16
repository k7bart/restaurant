const DateTimeInput = ({ register, errors }) => {
    return (
        <div>
            <label>
                <p>Date</p>
                <input {...register("date")} type="date" max="2024-12-31" />
                {errors.date && (
                    <p className="error">
                        Please provide the date of your visit.{" "}
                        {errors.date.message}
                    </p>
                )}
            </label>
            <label>
                <p>Time</p>
                <input
                    {...register("time")}
                    type="time"
                    min="10:00"
                    max="21:00"
                />
                {errors.time && <p className="error">{errors.time.message}</p>}
            </label>
        </div>
    );
};

export default DateTimeInput;
