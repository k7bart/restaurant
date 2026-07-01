import * as yup from "yup";

const addressSchema = {
    city: yup.string().required("Please provide city"),
    street: yup.string().required("Please provide street"),
    house: yup.string().required("Please provide house number"),
    entrance: yup.string().optional(),
    floor: yup.string().optional(),
    apartment: yup.string().optional(),
    intercom: yup.string().optional(),
};

export default addressSchema;
