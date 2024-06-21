import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { capitalize } from "../../utils/stringUtils";

const TimeInput = ({
    control,
    error,
    name = "time",
    required = true,
    label = capitalize(name),
}) => {
    return (
        <label className="time-picker">
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
                        onChange={(time) => {
                            field.onChange(time);
                        }}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        dateFormat="h:mm aa"
                        filterTime={(time) => {
                            const hour = time.getHours();
                            return hour >= 10 && hour <= 20;
                        }}
                        timeCaption="Time"
                    />
                )}
            />
            {error && <p className="error">{error.message}</p>}
        </label>
    );
};

export default TimeInput;
