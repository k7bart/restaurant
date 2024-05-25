const PhoneInput = ({ register, error }) => {
    return (
        <label>
            <p>Phone</p>
            <input type="tel" {...register("phone")} />
            {error && <p className="error">{error.message}</p>}
        </label>
    );
};

export default PhoneInput;
