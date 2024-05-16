const NumberOfGuestsInput = ({ register, errors }) => (
    <div>
        <label>
            <p>Number of adults</p>
            <input {...register("numberOfAdults")} type="number" min={1} />
            {errors.numberOfAdults && (
                <p className="error">
                    Please provide the number of adult guests.
                </p>
            )}
        </label>
        <label>
            <p>Number of children</p>
            <input {...register("numberOfChildren")} type="number" min={0} />
            {errors.numberOfChildren && (
                <p className="error">{errors.numberOfChildren.message}</p>
            )}
        </label>
    </div>
);

export default NumberOfGuestsInput;
