import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import classNames from "classnames";
import { Controller, useFormContext } from "react-hook-form";
import { filterTime } from "../../../utils/timeUtils";

import Text from "../Text/Text";

const TimeInput = ({
    name = "time",
    required,
    label = "Time",
    selectedDate,
}) => {
    const today = new Date();
    const { control, formState, getFieldState } = useFormContext();
    const { error } = getFieldState(name, formState);

    return (
        <label className={classNames("time-picker", { error })}>
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
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        dateFormat="h:mm aa"
                        filterTime={(time) =>
                            filterTime(time, today, selectedDate)
                        }
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
    name: PropTypes.string,
    required: PropTypes.bool,
    label: PropTypes.string,
    selectedDate: PropTypes.instanceOf(Date),
};

export default TimeInput;
