import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Arrows from "./arrows/Arrows";
import Dots from "./dots/Dots";
import Slide from "./slide/Slide";
import styles from "./Carrousel.module.scss";

const Carrousel = ({ content, dots, num, autoPlay }) => {
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

    const handleSlideChange = (step) => {
        setCurrentIndex(
            (prev) => (prev + step + content.length) % content.length
        );
        resetAutoPlay();
    };

    const handleGoToSlide = (index) => {
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

Carrousel.propTypes = {
    content: PropTypes.array.isRequired,
    dots: PropTypes.bool,
    num: PropTypes.number,
    autoPlay: PropTypes.bool,
};

Carrousel.defaultProps = {
    dots: false,
    num: 1,
    autoPlay: false,
};

export default Carrousel;
