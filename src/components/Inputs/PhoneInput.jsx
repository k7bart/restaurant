import { useState } from "react";

const PhoneInput = ({ register, error, defaultPhone = "" }) => {
    const [phone, setPhone] = useState(defaultPhone);

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    return (
        <label>
            <p>Phone</p>
            <input
                type="tel"
                {...register("phone")}
                value={phone}
                onChange={handlePhoneChange}
            />
            {error && <p className="error">{error.message}</p>}
        </label>
    );
};

export default PhoneInput;
