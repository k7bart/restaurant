import { capitalize } from "../../../../utils/stringUtils";
import Text from "../../Text/Text";
import styles from "./Input.module.scss";
import PropTypes from "prop-types";

const Input = ({ error, fieldName, label, register, required }) => {
    return (
        <label className={styles.label}>
            <Text size="medium">
                {label ? label : capitalize(fieldName)}
                {required && "*"}
            </Text>

            <input
                {...register(fieldName)}
                className={error ? styles.error : undefined}
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
    error: PropTypes.object,
    fieldName: PropTypes.string.isRequired,
    label: PropTypes.string,
    register: PropTypes.func.isRequired,
    required: PropTypes.bool,
};

Input.defaultProps = {
    label: undefined,
    required: false,
};

export default Input;
