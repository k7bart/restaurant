import { useState } from "react";
import "./Carrousel.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carrousel = ({ photos, dots }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => setCurrentIndex(index);

    const changeSlide = (step) => {
        const newIndex = (currentIndex + step + photos.length) % photos.length;
        setCurrentIndex(newIndex);
    };

    const dotsDiv = (
        <div className="dots">
            {photos.map((_, index) => (
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

    return (
        <div className="carrousel">
            <div className="arrow back" onClick={() => changeSlide(-1)}>
                <IoIosArrowBack />
            </div>
            <div
                className="slide"
                style={{ backgroundImage: `url(${photos[currentIndex]})` }}
            ></div>
            <div className="arrow forward" onClick={() => changeSlide(1)}>
                <IoIosArrowForward />
            </div>

            {dots && dotsDiv}
        </div>
    );
};

export default Carrousel;
