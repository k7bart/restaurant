import { useFormContext } from "react-hook-form";
import PropTypes from "prop-types";

import Text from "../text/Text";

import styles from "./Textarea.module.scss";

const Textarea = ({ fieldName, label }) => {
    const { register } = useFormContext();

    return (
        <label>
            <Text size="medium">{label}</Text>

            <textarea className={styles.textarea} {...register(fieldName)} />
        </label>
    );
};

Textarea.propTypes = {
    fieldName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default Textarea;
