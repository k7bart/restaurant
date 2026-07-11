import Input, { type InputProps } from "./input/Input";

const LastNameInput = (props: Omit<InputProps, "fieldName">) => (
    <Input fieldName="lastName" label="Last name" {...props} />
);

export default LastNameInput;
