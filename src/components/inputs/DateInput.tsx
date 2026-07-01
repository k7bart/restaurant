import "react-datepicker/dist/react-datepicker.css";
import cn from "classnames";
import { addMonths } from "date-fns";
import DatePicker from "react-datepicker";
import { Controller, useFormContext } from "react-hook-form";
import { getAvailableDay } from "../../utils/dateUtils";
import Text from "../text/Text";

type Props = {
    defaultValue?: Date;
    label?: string;
    maxDate?: Date;
    minDate?: Date;
    name?: string;
    onChange?: (date: Date | null) => void;
    required?: boolean;
};

const DateInput = ({
    defaultValue,
    label = "Date",
    maxDate,
    minDate,
    name = "date",
    onChange,
    required,
}: Props) => {
    const { control, getFieldState, formState } = useFormContext();
    const { error } = getFieldState(name, formState);

    return (
        <label className={cn("date-picker", { error })}>
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
                        minDate={minDate ?? getAvailableDay()}
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

export default DateInput;
