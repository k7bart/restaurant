import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import classNames from "classnames";
import { Controller } from "react-hook-form";
import { filterTime } from "../../../../utils/timeUtils";

import Text from "../../Text/Text";

const TimeInput = ({ control, error, name, required, label, selectedDate }) => {
    const today = new Date();

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
    control: PropTypes.object.isRequired,
    error: PropTypes.shape({ message: PropTypes.string }),
    name: PropTypes.string,
    required: PropTypes.bool,
    label: PropTypes.string,
    selectedDate: PropTypes.instanceOf(Date),
};

TimeInput.defaultProps = {
    name: "time",
    required: true,
    label: "Time",
};

export default TimeInput;
