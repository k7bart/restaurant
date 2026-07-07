import Input, { InputProps } from "./input/Input";

const FirstNameInput = (props: Omit<InputProps, "fieldName">) => (
    <Input fieldName="firstName" label="First name" {...props} />
);

export default FirstNameInput;
