import { FocusEventHandler } from "react";
import Input from "./input/Input";

type Props = {
    onBlur?: FocusEventHandler<HTMLInputElement>;
    required?: boolean;
};

const EmailInput = ({ required, onBlur }: Props) => (
    <Input
        fieldName="email"
        onBlur={onBlur}
        label="E-mail"
        required={required}
    />
);

export default EmailInput;
