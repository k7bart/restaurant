import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Controller } from "react-hook-form";
import { addMonths } from "date-fns";

import Text from "../Text/Text";

const today = new Date();

const DateInput = ({ control, error, name, required, label }) => {
    return (
        <label className={classNames("date-picker", error && "error")}>
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
                        onChange={field.onChange}
                        minDate={today}
                        maxDate={addMonths(today, 2)}
                        dateFormat="dd/MM/yyyy"
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

DateInput.propTypes = {
    control: PropTypes.object.isRequired,
    error: PropTypes.shape({
        message: PropTypes.string,
    }),
    name: PropTypes.string,
    required: PropTypes.bool,
    label: PropTypes.string,
};

DateInput.defaultProps = {
    name: "date",
    required: false,
    label: "Date",
};

export default DateInput;
