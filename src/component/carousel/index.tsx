import "./index.scss";
import { Card } from "../../type";
import { FC, useEffect, useState } from "react";
import { CarouselItem } from "./carouselItem";
import classNames from "classnames";
import { useMediaQuery } from "@uidotdev/usehooks";

type Props = {
  items:Card[],
}

const Carousel:FC<Props> = ({items}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateWidth, setTranslateWidth] = useState(1200)
  
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1271px)"
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 900px) and (max-width : 1270px)"
  );
  const isMediaDevice = useMediaQuery(
    "only screen and (min-width : 521px) and (max-width : 899px)"
  );
  const isSmallDevice = useMediaQuery(
    "only screen and (max-width : 520px)"
  );
  
  useEffect(() => {
    if (isExtraLargeDevice) {
      setTranslateWidth(1200)
    } else if (isLargeDevice) {
      setTranslateWidth(800)
    } else if (isMediaDevice) {
      setTranslateWidth(450)
    } else if (isSmallDevice) {
      setTranslateWidth(280)
    }
  }, [isExtraLargeDevice, isLargeDevice, isMediaDevice, isSmallDevice])
  
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };
  
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };
  
  const isAtFirstItem = currentIndex === 0;
  const isAtLastItem = currentIndex === items.length - 1;
  
  return (
    <div className="carousel">
      <button
        className={classNames("leftArrow", { "disabled": isAtFirstItem })}
        onClick={handlePrevClick}
        disabled={isAtFirstItem}
      >{"<"}</button>
      <div className="carouselWrapper">
        <div className="carouselContainer" style={{ transform: `translateX(-${currentIndex * translateWidth}px)` }}>
          {items.map(({ id, title, text, imgSrc}, index) => (
            <CarouselItem
              key={id}
              title={title}
              name={text}
              srcImg={imgSrc}
              isVisible={index === currentIndex}
            />
          ))}
        </div>
      </div>
      <div className="carouselBtns">
        {items.map((_, index) => (
          <button key={index} className={`carouselBtn ${index === currentIndex ? "active" : ""}`}></button>
        ))}
      </div>
      <button
        className={classNames("rightArrow", { "disabled": isAtLastItem })}
        onClick={handleNextClick}
        disabled={isAtLastItem}
      >{">"}</button>
    </div>
  )
}

export { Carousel }
