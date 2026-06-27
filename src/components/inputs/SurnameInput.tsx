import Input, { InputProps } from "./input/Input";

const SurnameInput = (props: Omit<InputProps, "fieldName">) => (
    <Input fieldName="surname" {...props} />
);

export default SurnameInput;
