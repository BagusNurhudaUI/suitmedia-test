
import React, { Component , useState} from "react";
import { CarouselData } from "./DataImg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)


  const nextSlide = () => {
    let newSlide =
      currentSlide === CarouselData.length - 1
        ? 0
        : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const prevSlide = () => {
    let newSlide =
      currentSlide === 0
        ? CarouselData.length - 1
        : currentSlide - 1;
        setCurrentSlide(newSlide);
  };

  const Slide = (index) => {
    setCurrentSlide(index);
  };
    return (
      <div className=" w-full ">
        <div className="  flex overflow-hidden relative">
          <AiOutlineLeft
            onClick={prevSlide}
            className="absolute text-white left-4 text-3xl inset-y-1/2 cursor-pointer"
          />

          <Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}>
            {CarouselData.map((slide, index) => {
              return (
                <div>
                  <img
                  src={slide.image}
                  alt="This is a carousel slide"
                  key={index}
                  className={
                    index === currentSlide
                      ? "block w-screen h-screen object-cover"
                      : "hidden"
                  }
                  />
                
                    <div className={index === currentSlide
                        ? "absolute z-100 text-xl bottom-48 left-36 inset-x-1/2 p-2 w-1/3 bg-black opacity-50 font-weight-semibold"
                        : "hidden"} key={index}>
                    <h1 className="opacity-100 text-white flex justify-start">{slide.caption} </h1>
                    </div>
                    <div className={index === currentSlide
                        ? "absolute z-100 text-xl bottom-48 left-36 inset-x-1/2 w-1/3 p-2 font-weight-semibold"
                        : "hidden"} key={index}>
                    <h1 className="opacity-100 text-white flex justify-start">{slide.caption} </h1>
                    </div>
                    
                  
                  
                </div>
                
                
              );
            })}
          </Swipe>

          <div className="absolute w-full flex justify-center bottom-0">
            {CarouselData.map((element, index) => {
              return (
                <div
                  className={
                    index === currentSlide
                      ? "h-full w-2  rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-full w-2rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    Slide(index);
                  }}
                ></div>
              );
            })}
          </div>

          <AiOutlineRight
            onClick={nextSlide}
            className="absolute right-4 text-3xl inset-y-1/2 text-white cursor-pointer"
          />
        </div>
      </div>
    );
  
}

export default Carousel;