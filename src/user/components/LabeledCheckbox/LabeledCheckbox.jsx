import styles from "./LabeledCheckbox.module.scss";
import Text from "../Text/Text";

const LabeledCheckbox = ({ text, register }) => {
    return (
        <label className={styles.checkbox}>
            <input type="checkbox" {...register} />
            <Text size="large">{text}</Text>
        </label>
    );
};

export default LabeledCheckbox;
