const EmailInput = ({ register, error }) => {
    return (
        <label>
            <p>Email</p>
            <input {...register("email")} type="text" />
            {error && <p className="error">{error.message}</p>}
        </label>
    );
};

export default EmailInput;
