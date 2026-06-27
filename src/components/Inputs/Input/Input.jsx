import { useFormContext } from "react-hook-form";
import { capitalize } from "../../../utils/stringUtils";
import Text from "../../text/Text";
import styles from "./Input.module.scss";
import PropTypes from "prop-types";

const Input = ({ fieldName, onBlur, label, required, type = "text" }) => {
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

Input.propTypes = {
    fieldName: PropTypes.string.isRequired,
    label: PropTypes.string,
    onBlur: PropTypes.func,
    required: PropTypes.bool,
    type: PropTypes.oneOf(["text", "email", "password", "tel"]),
};

export default Input;
