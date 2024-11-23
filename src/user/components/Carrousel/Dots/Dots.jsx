import classNames from "classnames";
import styles from "./Dots.module.scss";

const Dots = ({ content, currentIndex, onClick }) => {
    return (
        <div className={styles.dots}>
            {content.map((_, index) => (
                <div
                    key={index}
                    onClick={() => onClick(index)}
                    className={classNames({
                        [styles.active]: currentIndex === index,
                    })}
                >
                    ●
                </div>
            ))}
        </div>
    );
};

export default Dots;
