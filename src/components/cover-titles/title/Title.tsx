import cn from "classnames";
import styles from "./Title.module.scss";

type Props = {
    additionalStyles?: string;
    text: string;
};

const Title = ({ additionalStyles, text }: Props) => (
    <h1 className={cn(styles.title, additionalStyles)}>{text}</h1>
);

export default Title;
