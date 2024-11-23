import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import Text from "../Text/Text";

import "react-datepicker/dist/react-datepicker.css";

const BirthdayInput = ({ control, error }) => {
    return (
        <label className="date-picker">
            <Text>Birthday</Text>
            <Controller
                control={control}
                name="birthday"
                render={({ field }) => (
                    <DatePicker
                        selected={field.value}
                        onChange={field.onChange}
                        dateFormat="dd/MM/yyyy"
                    />
                )}
            />
            {error && <p className="error">{error.message}</p>}
        </label>
    );
};

BirthdayInput.propTypes = {
    control: PropTypes.object.isRequired,
    error: PropTypes.object,
};

export default BirthdayInput;
