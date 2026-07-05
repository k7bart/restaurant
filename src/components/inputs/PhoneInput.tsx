import Input, { InputProps } from "./input/Input";

const PhoneInput = (props: Omit<InputProps, "fieldName">) => (
    <Input fieldName="phone" type="tel" autoComplete="tel" {...props} />
);

export default PhoneInput;
