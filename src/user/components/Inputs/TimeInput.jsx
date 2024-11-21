import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import classNames from "classnames";
import { Controller } from "react-hook-form";

import Text from "../Text/Text";

const TimeInput = ({ control, error, name, required, label }) => {
    return (
        <label className={classNames("time-picker", error && "error")}>
            <Text>
                {label}
                {required && "*"}
            </Text>

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

            {error && (
                <Text color="wisteria" fontWeight="extraLight" size="small">
                    {error.message}
                </Text>
            )}
        </label>
    );
};

TimeInput.propTypes = {
    control: PropTypes.object.isRequired,
    error: PropTypes.shape({
        message: PropTypes.string,
    }),
    name: PropTypes.string,
    required: PropTypes.bool,
    label: PropTypes.string,
};

TimeInput.defaultProps = {
    name: "time",
    required: true,
    label: "Time",
};

export default TimeInput;
