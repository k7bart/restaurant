import Input, { InputProps } from "./input/Input";

const PhoneInput = (props: Omit<InputProps, "fieldName">) => (
    <Input fieldName="phone" {...props} />
);

export default PhoneInput;
