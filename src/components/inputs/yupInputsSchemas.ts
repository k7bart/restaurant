import * as yup from "yup";
import { isValidPhone } from "../../utils/phoneUtils";

export const nameSchema = yup.string().required("Please provide your name");

export const phoneSchema = yup
    .string()
    .required("Please provide your phone number")
    .test(
        "is-valid-phone",
        "The phone number is not valid.",
        (value) => !value || isValidPhone(value),
    );

export const timeSchema = yup
    .date()
    .required("Please select a time")
    .typeError("Please select a time");

export const emailSchema = yup
    .string()
    .email("Please provide a valid email address")
    .optional();
