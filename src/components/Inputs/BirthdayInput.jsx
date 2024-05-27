import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BirthdayInput = ({ control, error }) => {
    return (
        <label className="date-picker">
            <p>Birthday</p>
            <Controller
                control={control}
                name="birthday"
                render={({ field }) => (
                    <DatePicker
                        selected={field.value}
                        onChange={field.onChange}
                        dateFormat="dd/MM/yyyy"
                    />
                )}
            />
            {error && <p className="error">{error.message}</p>}
        </label>
    );
};

export default BirthdayInput;
