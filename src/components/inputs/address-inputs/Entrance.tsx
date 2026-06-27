import Input, { InputProps } from "../input/Input";

const EntranceInput = (props: Omit<InputProps, "fieldName">) => (
    <Input fieldName="entrance" {...props} />
);

export default EntranceInput;
