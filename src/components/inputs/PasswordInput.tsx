import Input, { type InputProps } from "./input/Input";

const PasswordInput = (props: Omit<InputProps, "fieldName" | "type">) => (
    <Input fieldName="password" required type="password" {...props} />
);

export default PasswordInput;
