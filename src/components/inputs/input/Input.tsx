import { FocusEventHandler } from "react";
import { useFormContext } from "react-hook-form";
import { capitalize } from "../../../utils/stringUtils";
import Text from "../../text/Text";
import styles from "./Input.module.scss";

type InputType = "text" | "email" | "password" | "tel";

export type InputProps = {
    fieldName: string;
    label?: string;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    required?: boolean;
    type?: InputType;
};

const Input = ({
    fieldName,
    onBlur,
    label,
    required,
    type = "text",
}: InputProps) => {
    const { register, getFieldState, formState } = useFormContext();
    const { error } = getFieldState(fieldName, formState);

    return (
        <label className={styles.label}>
            <Text size="medium">
                {label || capitalize(fieldName)}
                {required && "*"}
            </Text>

            <input
                {...register(fieldName)}
                className={error ? styles.error : undefined}
                type={type}
                onBlur={onBlur}
            />

            {error && (
                <Text color="wisteria" fontWeight="extraLight" size="small">
                    {error.message}
                </Text>
            )}
        </label>
    );
};

export default Input;
