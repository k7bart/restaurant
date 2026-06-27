import { useState } from "react";
import PropTypes from "prop-types";
import { addMonths } from "date-fns";

import DateInput from "../DateInput";
import TimeInput from "../TimeInput";

const DateTimeInputs = ({ startDate }) => {
    const [selectedDate, setSelectedDate] = useState(startDate);

    return (
        <div>
            <DateInput
                maxDate={addMonths(new Date(), 1)}
                minDate={startDate}
                required
                onChange={setSelectedDate}
            />

            <TimeInput selectedDate={selectedDate} />
        </div>
    );
};

DateTimeInputs.propTypes = {
    startDate: PropTypes.instanceOf(Date).isRequired,
};

export default DateTimeInputs;
