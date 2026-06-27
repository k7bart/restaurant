import * as yup from "yup";

export const nameSchema = yup.string().required("Please provide your name");

export const phoneSchema = yup
    .string()
    .required("Please provide your phone number");

export const timeSchema = yup
    .date()
    .required("Please select a time")
    .typeError("Please select a time");
