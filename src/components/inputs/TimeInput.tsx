import cn from "classnames";
import DatePicker from "react-datepicker";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { filterTime } from "../../utils/timeUtils";
import Text from "../text/Text";

type Props = {
    label?: string;
    name?: string;
    required?: boolean;
    selectedDate?: Date;
};

const TimeInput = ({
    name = "time",
    required,
    label = "Time",
    selectedDate,
}: Props) => {
    const now = new Date();
    const { control, formState, getFieldState } = useFormContext();
    const formDate = useWatch({ control, name: "date" });
    const { error } = getFieldState(name, formState);
    const effectiveDate = selectedDate ?? formDate ?? now;

    return (
        <label className={cn("time-picker", { error })}>
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
                            filterTime(time, now, effectiveDate)
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

export default TimeInput;
