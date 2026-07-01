import cn from "classnames";
import styles from "./Badge.module.scss";

type Props = {
    className?: string;
    text: string;
};

const Badge = ({ className, text }: Props) => (
    <span className={cn(styles.badge, className)}>{text}</span>
);

export default Badge;
