import Input, { InputProps } from "./input/Input";

const LastNameInput = (props: Omit<InputProps, "fieldName">) => (
    <Input fieldName="lastName" {...props} />
);

export default LastNameInput;
