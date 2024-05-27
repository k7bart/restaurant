const SurnameInput = ({ register, error }) => {
    return (
        <label>
            <p>Surname</p>
            <input {...register("surname")} />
            {error && <p className="error">{error.message}</p>}
        </label>
    );
};

export default SurnameInput;
