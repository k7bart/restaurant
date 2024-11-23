import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Arrows from "./Arrows/Arrows";
import Dots from "./Dots/Dots";
import Slide from "./slide/Slide";

import styles from "./Carrousel.module.scss";

const Carrousel = ({ content, dots, num, slideShow }) => {
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
    slideShow: PropTypes.bool,
};

Carrousel.defaultProps = {
    dots: false,
    num: 1,
    slideShow: false,
};

export default Carrousel;
