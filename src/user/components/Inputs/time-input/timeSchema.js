import * as yup from "yup";

const timeSchema = yup
    .date()
    .required("Please select a time")
    .typeError("Please select a time");

export default timeSchema;
