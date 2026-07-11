import Input, { type InputProps } from "./input/Input";

const NumberOfAdultsInput = (props: Omit<InputProps, "fieldName" | "label">) => (
    <Input fieldName="numberOfAdults" label="Number of Adults" {...props} />
);

export default NumberOfAdultsInput;
