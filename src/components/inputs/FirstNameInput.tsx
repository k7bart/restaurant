import Input, { InputProps } from "./input/Input";

const FirstNameInput = (props: Omit<InputProps, "fieldName">) => (
    <Input fieldName="firstName" {...props} />
);

export default FirstNameInput;
