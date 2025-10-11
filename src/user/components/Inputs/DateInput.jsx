import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Controller, useFormContext } from "react-hook-form";
import { addMonths } from "date-fns";
import Text from "../Text/Text";

const DateInput = ({
    defaultValue,
    label = "Date",
    maxDate,
    minDate,
    name = "date",
    onChange,
    required,
}) => {
    const { control, getFieldState, formState } = useFormContext();
    const { error } = getFieldState(name, formState);

    return (
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
                        minDate={minDate || new Date()}
                        maxDate={maxDate || addMonths(new Date(), 2)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="DD/MM/YYYY"
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
    defaultValue: PropTypes.instanceOf(Date),
    label: PropTypes.string,
    name: PropTypes.string,
    maxDate: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    required: PropTypes.bool,
    onChange: PropTypes.func,
};

export default DateInput;
