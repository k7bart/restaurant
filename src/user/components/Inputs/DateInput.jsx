import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Controller } from "react-hook-form";
import { addMonths } from "date-fns";
import Text from "../Text/Text";

const DateInput = ({
    control,
    defaultValue,
    error,
    label,
    maxDate,
    minDate,
    name,
    onChange,
    required,
}) => (
    <label className={classNames("date-picker", { error })}>
        <Text size="medium">
            {label}
            {required && "*"}
        </Text>
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <DatePicker
                    selected={field.value || defaultValue}
                    onChange={(date) => {
                        field.onChange(date);
                        onChange?.(date);
                    }}
                    minDate={minDate}
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

DateInput.propTypes = {
    control: PropTypes.object.isRequired,
    defaultValue: PropTypes.instanceOf(Date),
    error: PropTypes.shape({ message: PropTypes.string }),
    label: PropTypes.string,
    name: PropTypes.string,
    maxDate: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    required: PropTypes.bool,
    onChange: PropTypes.func,
};

DateInput.defaultProps = {
    label: "Date",
    name: "date",
    maxDate: addMonths(new Date(), 2),
    minDate: new Date(),
    required: false,
};

export default DateInput;
