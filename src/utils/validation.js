import { removeSpaces } from "./stringUtils";

export const isPhoneValid = (phone) => {
    const number = removeSpaces(phone);

    if (!/^\+?\d+$/.test(number)) return false;

    if (number.startsWith("+")) {
        return number.length === 13;
    }

    if (number.startsWith("380")) {
        return number.length === 12;
    }

    return number.length === 10;
};
