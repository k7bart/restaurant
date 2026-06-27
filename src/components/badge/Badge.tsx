import cn from "classnames";
import styles from "./Badge.module.scss";

type Props = {
    additionalStyles?: string;
    text: string;
};

const Badge = ({ additionalStyles, text }: Props) => (
    <span className={cn(styles.badge, additionalStyles)}>{text}</span>
);

export default Badge;
