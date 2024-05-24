import { useState } from "react";

const EmailInput = ({ register, error, defaultEmail = "" }) => {
    const [email, setEmail] = useState(defaultEmail);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <label>
            <p>Email</p>
            <input
                {...register("email")}
                type="text"
                value={email}
                onChange={handleEmailChange}
            />
            {error && <p className="error">{error.message}</p>}
        </label>
    );
};

export default EmailInput;
