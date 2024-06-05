import React, { useState, useEffect } from "react";
import "./Carrousel.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carrousel = ({ content, dots, num = 1, slideShow = false }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const changeSlide = (step) => {
        const newIndex =
            (currentIndex + step + content.length) % content.length;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        if (slideShow) {
            const interval = setInterval(() => {
                changeSlide(1);
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [slideShow]);

    const goToSlide = (index) => setCurrentIndex(index);

    const dotsEl = dots && content.length > 1 && (
        <div className="dots">
            {content.map((_, index) => (
                <div
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={currentIndex === index ? "active" : ""}
                >
                    ●
                </div>
            ))}
        </div>
    );

    const arrows = content.length > 1 && (
        <>
            <div className="arrow back" onClick={() => changeSlide(-1)}>
                <IoIosArrowBack />
            </div>
            <div className="arrow forward" onClick={() => changeSlide(1)}>
                <IoIosArrowForward />
            </div>
        </>
    );

    const visibleGroup =
        content.length - currentIndex < num
            ? [
                  ...content.slice(currentIndex),
                  ...content.slice(0, num - (content.length - currentIndex)),
              ]
            : content.slice(currentIndex, currentIndex + num);

    return (
        <div className="carrousel-container">
            <div className="slides-container">
                {visibleGroup.map((s, index) => (
                    <div key={index} className="slide">
                        {s}
                    </div>
                ))}
            </div>

            {arrows}

            {dotsEl}
        </div>
    );
};

export default Carrousel;
