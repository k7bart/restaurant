import Input, { type InputProps } from "../input/Input";

const CityInput = (props: Omit<InputProps, "fieldName">) => (
    <Input fieldName="city" {...props} />
);

export default CityInput;
