import { type ReactNode } from "react";
import cn from "classnames";
import styles from "./Dots.module.scss";

type Props = {
    content: ReactNode[];
    currentIndex: number;
    onClick: (index: number) => void;
};

const Dots = ({ content, currentIndex, onClick }: Props) => (
    <div className={styles.dots}>
        {content.map((_, index) => (
            <div
                key={index}
                onClick={() => onClick(index)}
                className={cn({
                    [styles.active]: currentIndex === index,
                })}
            >
                ●
            </div>
        ))}
    </div>
);

export default Dots;
