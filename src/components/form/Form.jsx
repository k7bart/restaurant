import { useFormContext } from "react-hook-form";
import styles from "./Form.module.scss";

const Form = ({ children, onSubmit }) => {
    const { handleSubmit } = useFormContext();

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {children}
        </form>
    );
};

export default Form;
