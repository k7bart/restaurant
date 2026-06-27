import Input, { InputProps } from "./input/Input";

const NameInput = (props: Omit<InputProps, "fieldName">) => (
    <Input fieldName="name" {...props} />
);

export default NameInput;
