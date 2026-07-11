import Input, { type InputProps } from "./input/Input";

const NumberOfChildrenInput = (
    props: Omit<InputProps, "fieldName" | "label">,
) => (
    <Input
        fieldName="numberOfChildren"
        label="Number of Children"
        {...props}
    />
);

export default NumberOfChildrenInput;
