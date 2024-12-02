import PropTypes from "prop-types";

import Text from "../Text/Text";

import styles from "./Textarea.module.scss";

const Textarea = ({ text, register }) => {
    return (
        <label>
            <Text size="medium">{text}</Text>

            <textarea className={styles.textarea} {...register} />
        </label>
    );
};

Textarea.propTypes = {
    text: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
};

export default Textarea;
