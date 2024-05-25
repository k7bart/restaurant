const NameInput = ({ register, error }) => {
    return (
        <label>
            <p>Name</p>
            <input {...register("name")} />
            {error && <p className="error">{error.message}</p>}
        </label>
    );
};

export default NameInput;
