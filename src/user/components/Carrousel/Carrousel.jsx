import { useState, useEffect } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Arrows from "./Arrows/Arrows";
import Dots from "./Dots/Dots";
import Slide from "./slide/Slide";

import styles from "./Carrousel.module.scss";

const Carrousel = ({ content, dots, num, slideShow, customStyles }) => {
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
        <div
            className={classNames(customStyles?.carrousel, styles.carrousel)}
            data-testid="carrousel"
        >
            <div className={styles.slidesContainer}>
                {visibleGroup.map((slideContent, index) => (
                    <Slide
                        customStyles={customStyles?.slide}
                        key={index}
                        slideContent={slideContent}
                    />
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
    customStyles: PropTypes.object,
};

Carrousel.defaultProps = {
    dots: false,
    num: 1,
    slideShow: false,
    customStyles: undefined,
};

export default Carrousel;
