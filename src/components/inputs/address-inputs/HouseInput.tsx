import Input, { type InputProps } from "../input/Input";

const HouseInput = (props: Omit<InputProps, "fieldName">) => (
    <Input fieldName="house" {...props} />
);

export default HouseInput;
