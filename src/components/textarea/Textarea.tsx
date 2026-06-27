import { useFormContext } from "react-hook-form";
import Text from "../text/Text";
import styles from "./Textarea.module.scss";

type Props = {
    fieldName: string;
    label: string;
};

const Textarea = ({ fieldName, label }: Props) => {
    const { register } = useFormContext();

    return (
        <label>
            <Text size="medium">{label}</Text>

            <textarea className={styles.textarea} {...register(fieldName)} />
        </label>
    );
};

export default Textarea;
