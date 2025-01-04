import { addMonths, subDays } from "date-fns";

import * as yup from "yup";
import addressSchema from "../../../components/Inputs/address-inputs/address-yup-utils/addressSchema";
import textareaSchema from "../../../components/textarea/textareaSchema";
import timeSchema from "../../../components/Inputs/time-input/timeSchema";
import {
    nameSchema,
    phoneSchema,
} from "../../../components/Inputs/yupInputsSchemas";

const today = new Date();

const commonSchema = {
    name: nameSchema,
    orderComment: textareaSchema,
    phone: phoneSchema,
};

const schemas = {
    delivery: yup.object({
        ...addressSchema,
        ...commonSchema,
        addressComment: textareaSchema,
    }),

    selfPickup: yup.object({ ...commonSchema }),

    advance: yup.object({
        ...addressSchema,
        ...commonSchema,
        date: yup
            .date()
            .required("Please pick a date")
            .min(subDays(today, 1), "Date cannot be earlier than today")
            .max(
                addMonths(today, 1),
                "Date cannot be later than 1 month from today"
            ),
        time: timeSchema,
    }),
};

export default (deliveryMethod) => schemas[deliveryMethod];
