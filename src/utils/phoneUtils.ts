import {
    isValidPhoneNumber,
    parsePhoneNumberFromString,
} from "libphonenumber-js";

const DEFAULT_COUNTRY = "UA";

export const isValidPhone = (phone: string) =>
    isValidPhoneNumber(phone, DEFAULT_COUNTRY);

export const formatPhoneForApi = (phone: string) => {
    const parsed = parsePhoneNumberFromString(phone, DEFAULT_COUNTRY);

    if (!parsed?.isValid()) return phone;

    return parsed.format("E.164");
};
