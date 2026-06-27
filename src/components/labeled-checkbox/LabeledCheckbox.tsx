import { useFormContext } from "react-hook-form";
import styles from "./LabeledCheckbox.module.scss";
import Text from "../text/Text";

type Props = {
    fieldName: string;
    label: string;
};

const LabeledCheckbox = ({ fieldName, label }: Props) => {
    const { register } = useFormContext();

    return (
        <label className={styles.checkbox}>
            <input type="checkbox" {...register(fieldName)} />
            <Text size="large">{label}</Text>
        </label>
    );
};

export default LabeledCheckbox;
