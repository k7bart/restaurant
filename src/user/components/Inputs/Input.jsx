import { capitalize } from "../../../utils/stringUtils";

const Input = ({
    register,
    error,
    fieldName,
    required = false,
    label = capitalize(fieldName),
}) => {
    return (
        <label>
            <p>
                {label}
                {required && "*"}
            </p>
            <input
                {...register(fieldName)}
                className={error ? "error" : undefined}
            />
            {error && <p className="error">{error.message}</p>}
        </label>
    );
};

export default Input;
