import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Controller } from "react-hook-form";
import { addMonths } from "date-fns";

import Text from "../Text/Text";

const today = new Date();

const DateInput = ({ control, error, label, maxDate, name, required }) => {
    return (
        <label className={classNames("date-picker", error && "error")}>
            <Text size="medium">
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
                        maxDate={maxDate}
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
    label: PropTypes.string,
    name: PropTypes.string,
    maxDate: PropTypes.instanceOf(Date),
    required: PropTypes.bool,
};

DateInput.defaultProps = {
    label: "Date",
    name: "date",
    maxDate: addMonths(today, 2),
    required: false,
};

export default DateInput;
