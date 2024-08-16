import { capitalize } from "../../../../utils/stringUtils";
import Text from "../../Text/Text";
import styles from "./Input.module.scss";

const Input = ({
    register,
    error,
    fieldName,
    required = false,
    label = capitalize(fieldName),
}) => {
    return (
        <label className={styles.label}>
            <Text>
                {label}
                {required && "*"}
            </Text>
            <input
                {...register(fieldName)}
                className={error ? "error" : undefined}
            />
            {error && <Text className="error">{error.message}</Text>}
        </label>
    );
};

export default Input;
