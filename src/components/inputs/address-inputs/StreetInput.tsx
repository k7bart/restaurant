import Input, { InputProps } from "../input/Input";

const StreetInput = (props: Omit<InputProps, "fieldName">) => (
    <Input fieldName="street" {...props} />
);

export default StreetInput;
