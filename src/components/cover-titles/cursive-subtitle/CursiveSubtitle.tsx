import cn from "classnames";
import styles from "./CursiveSubtitle.module.scss";

type Props = {
    additionalStyles?: string;
    text: string;
};

const CursiveSubtitle = ({ additionalStyles, text }: Props) => (
    <h2 className={cn(styles.cursiveSubtitle, additionalStyles)}>{text}</h2>
);

export default CursiveSubtitle;
