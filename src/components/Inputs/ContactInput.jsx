const ContactInput = ({ register, errors, email = "", phone = "" }) => {
    return (
        <div>
            <label>
                <p>Email</p>
                <input {...register("email")} type="text" value={email} />
                {errors.email && (
                    <p className="error">{errors.email.message}</p>
                )}
            </label>

            <label>
                <p>Phone</p>
                <input type="tel" {...register("phone")} value={phone} />
                {errors.phone && (
                    <p className="error">
                        Please share your phone number. We'll only reach out if
                        we have questions.
                    </p>
                )}
            </label>
        </div>
    );
};

export default ContactInput;
