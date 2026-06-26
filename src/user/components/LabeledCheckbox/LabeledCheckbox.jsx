import { useFormContext } from "react-hook-form";
import PropTypes from "prop-types";
import styles from "./LabeledCheckbox.module.scss";
import Text from "../text/Text";

const LabeledCheckbox = ({ fieldName, label }) => {
    const { register } = useFormContext();

    return (
        <label className={styles.checkbox}>
            <input type="checkbox" {...register(fieldName)} />
            <Text size="large">{label}</Text>
        </label>
    );
};

LabeledCheckbox.propTypes = {
    fieldName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default LabeledCheckbox;
