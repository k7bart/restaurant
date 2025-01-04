import { useState } from "react";
import PropTypes from "prop-types";
import { addMonths } from "date-fns";

import DateInput from "../DateInput";
import TimeInput from "../TimeInput";

const DateTimeInputs = ({ control, errors, startDate }) => {
    const [selectedDate, setSelectedDate] = useState(startDate);

    return (
        <div>
            <DateInput
                control={control}
                error={errors.date}
                maxDate={addMonths(new Date(), 1)}
                minDate={startDate}
                required
                onChange={setSelectedDate}
            />

            <TimeInput
                control={control}
                error={errors.time}
                selectedDate={selectedDate}
            />
        </div>
    );
};

DateTimeInputs.propTypes = {
    control: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
};

export default DateTimeInputs;
