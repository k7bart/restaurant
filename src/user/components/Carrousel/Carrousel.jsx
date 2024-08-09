import { useState, useEffect } from "react";
import Arrows from "./Arrows/Arrows";
import Dots from "./Dots/Dots";
import styles from "./Carrousel.module.scss";

const Carrousel = ({ content, dots, num = 1, slideShow = false }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (step) => {
        const newIndex =
            (currentIndex + step + content.length) % content.length;
        setCurrentIndex(newIndex);
    };

    const handleGoToSlide = (index) => setCurrentIndex(index);

    useEffect(() => {
        if (slideShow) {
            const interval = setInterval(() => {
                handleSlideChange(1);
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [slideShow]);

    const visibleGroup =
        content.length - currentIndex < num
            ? [
                  ...content.slice(currentIndex),
                  ...content.slice(0, num - (content.length - currentIndex)),
              ]
            : content.slice(currentIndex, currentIndex + num);

    return (
        <div className={styles.carrousel}>
            <div className={styles.slidesContainer}>
                {visibleGroup.map((s, index) => (
                    <div key={index} className={styles.slide}>
                        {s}
                    </div>
                ))}
            </div>

            {content.length > 1 && <Arrows onClick={handleSlideChange} />}

            {dots && content.length > 1 && (
                <Dots
                    onClick={handleGoToSlide}
                    currentIndex={currentIndex}
                    content={content}
                />
            )}
        </div>
    );
};

export default Carrousel;
