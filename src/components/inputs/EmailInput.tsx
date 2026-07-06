import { FocusEventHandler } from "react";
import Input from "./input/Input";

type Props = {
    autoComplete?: string;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    required?: boolean;
};

const EmailInput = ({ autoComplete, required, onBlur }: Props) => (
    <Input
        autoComplete={autoComplete}
        fieldName="email"
        onBlur={onBlur}
        label="E-mail"
        required={required}
    />
);

export default EmailInput;
