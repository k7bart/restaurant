import { ReactNode } from "react";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import styles from "./Form.module.scss";

type Props<T extends FieldValues> = {
    children: ReactNode;
    onSubmit: SubmitHandler<T>;
};

const Form = <T extends FieldValues>({ children, onSubmit }: Props<T>) => {
    const { handleSubmit } = useFormContext<T>();

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {children}
        </form>
    );
};

export default Form;
