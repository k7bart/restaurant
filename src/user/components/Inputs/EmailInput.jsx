import PropTypes from "prop-types";
import Input from "./Input/Input";

const EmailInput = ({ required, onBlur }) => {
    return (
        <Input
            fieldName="email"
            onBlur={onBlur}
            label="E-mail"
            required={required}
        />
    );
};

export default EmailInput;

EmailInput.propTypes = {
    onBlur: PropTypes.func,
    required: PropTypes.bool,
};
