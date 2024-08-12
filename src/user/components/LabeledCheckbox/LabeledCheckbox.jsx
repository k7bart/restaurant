import styles from "./LabeledCheckbox.module.scss";

const LabeledCheckbox = ({ text, register }) => {
    return (
        <label className={styles.checkbox}>
            <input type="checkbox" {...register} />
            <p className="large">{text}</p>
        </label>
    );
};

export default LabeledCheckbox;
