import { ReactNode } from "react";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import styles from "./Form.module.scss";

type Props = {
    children: ReactNode;
    onSubmit: SubmitHandler<FieldValues>;
};

const Form = ({ children, onSubmit }: Props) => {
    const { handleSubmit } = useFormContext();

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {children}
        </form>
    );
};

export default Form;
