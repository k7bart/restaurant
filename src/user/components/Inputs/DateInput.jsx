import { Controller } from "react-hook-form";
import { capitalize } from "../../../utils/stringUtils";
import DatePicker from "react-datepicker";
import { addMonths } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

const today = new Date();

const DateInput = ({
    control,
    error,
    name = "date",
    required = false,
    label = capitalize(name),
}) => {
    return (
        <label className="date-picker">
            <p>
                {label}
                {required && "*"}
            </p>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <DatePicker
                        selected={field.value}
                        onChange={field.onChange}
                        minDate={today}
                        maxDate={addMonths(today, 2)}
                        dateFormat="dd/MM/yyyy"
                    />
                )}
            />
            {error && <p className="error">{error.message}</p>}
        </label>
    );
};

export default DateInput;
