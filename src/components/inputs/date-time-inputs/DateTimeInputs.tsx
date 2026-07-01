import { addMonths } from "date-fns";
import { useState } from "react";
import DateInput from "../DateInput";
import TimeInput from "../TimeInput";

const DateTimeInputs = ({ startDate }: { startDate: Date }) => {
    const [selectedDate, setSelectedDate] = useState(startDate);

    return (
        <div>
            <DateInput
                maxDate={addMonths(new Date(), 1)}
                minDate={startDate}
                required
                onChange={(date) => setSelectedDate(date as Date)}
            />

            <TimeInput selectedDate={selectedDate} />
        </div>
    );
};

export default DateTimeInputs;
