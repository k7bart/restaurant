import "react-datepicker/dist/react-datepicker.css";
import ReactDatePickerModule from "react-datepicker";

type DatePickerModule = typeof ReactDatePickerModule & {
    default?: typeof ReactDatePickerModule;
};

const DatePicker: typeof ReactDatePickerModule =
    typeof ReactDatePickerModule === "function"
        ? ReactDatePickerModule
        : (ReactDatePickerModule as DatePickerModule).default!;

export default DatePicker;
