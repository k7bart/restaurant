import { ReactNode, useEffect, useState } from "react";
import Arrows from "./arrows/Arrows";
import Dots from "./dots/Dots";
import Slide from "./slide/Slide";
import styles from "./Carrousel.module.scss";

type Props = {
    autoPlay?: boolean;
    content: ReactNode[];
    dots?: boolean;
    num?: number;
};

const Carrousel = ({
    content,
    dots = false,
    num = 1,
    autoPlay = false,
}: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (autoPlay && !paused) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % content.length);
            }, 2000);

            return () => clearInterval(interval);
        }
    }, [autoPlay, paused, content.length]);

    const resetAutoPlay = () => {
        setPaused(true);
        setTimeout(() => setPaused(false), 5000);
    };

    const handleSlideChange = (step: number) => {
        setCurrentIndex(
            (prev) => (prev + step + content.length) % content.length,
        );
        resetAutoPlay();
    };

    const handleGoToSlide = (index: number) => {
        setCurrentIndex(index);
        resetAutoPlay();
    };

    const visibleGroup =
        content.length - currentIndex < num
            ? [
                  ...content.slice(currentIndex),
                  ...content.slice(0, num - (content.length - currentIndex)),
              ]
            : content.slice(currentIndex, currentIndex + num);

    return (
        <div className={styles.carrousel} data-testid="carrousel">
            <div className={styles.slidesContainer}>
                {visibleGroup.map((slideContent, index) => (
                    <Slide key={index} slideContent={slideContent} />
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
