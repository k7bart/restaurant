const NameInput = ({ register, errors, name = "", surname = "" }) => {
    const fullname = surname ? name + " " + surname : name;

    return (
        <label>
            <p>Name</p>
            <input {...register("name")} type="text" value={fullname} />
            {errors.name && <p className="error">Please provide your name</p>}
        </label>
    );
};

export default NameInput;
