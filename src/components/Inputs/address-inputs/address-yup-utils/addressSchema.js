import * as yup from "yup";

const addressSchema = {
    city: yup.string().required("Please provide city"),
    street: yup.string().required("Please provide street"),
    house: yup
        .number()
        .typeError("House must be a number")
        .required("Please provide house number"),
    entrance: yup.number().optional().positive().integer(),
    floor: yup.number().optional().positive().integer(),
    apartment: yup.number().optional().positive().integer(),
    intercom: yup.number().optional().positive().integer(),
};

export default addressSchema;
