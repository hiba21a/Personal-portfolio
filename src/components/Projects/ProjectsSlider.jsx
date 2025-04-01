import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cardData } from "./CardData";
import externalIconUrl from "../../assets/images/extenalIcon.svg";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const CardInfoSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(getCardsToDisplay());

  useEffect(() => {
    const updateCardsToShow = () => setCardsToShow(getCardsToDisplay());
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  function getCardsToDisplay() {
    if (window.innerWidth < 640) {
      return 1; 
    } else if (window.innerWidth < 768) {
      return 2; 
    }
    return 3; 
  }

  const handleNext = () => {
    if (activeIndex + 1 < cardData.length - (cardsToShow - 1)) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 w-full mt-10">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-5">
        <div>
          <p className="text-xl font-medium text-sky-400">Portfolio</p>
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-semibold dark:text-white">
              The Best <span className="text-sky-600">Projects</span>
            </h1>
            <div className="flex gap-3 max-sm:hidden">
              <button
                aria-label="prev card"
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className={`flex items-center rounded-full border-2 p-3 transition ${
                  activeIndex === 0
                    ? "border-gray-400 opacity-50 cursor-not-allowed"
                    : "border-sky-600 hover:border-sky-700 hover:scale-105 hover:opacity-90"
                }`}
              >
                <MdArrowBackIos className="text-sky-600" />
              </button>
              <button
                aria-label="next card"
                onClick={handleNext}
                disabled={activeIndex + 1 >= cardData.length - (cardsToShow - 1)}
                className={`flex items-center rounded-full border-2 p-3 transition ${
                  activeIndex + 1 >= cardData.length - (cardsToShow - 1)
                    ? "border-gray-400 opacity-50 cursor-not-allowed"
                    : "border-sky-600 hover:border-sky-700 hover:scale-105 hover:opacity-90"
                }`}
              >
                <MdArrowForwardIos className="text-sky-600" />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${(activeIndex * 61) / cardsToShow}%)`,

              width: `${cardData.length * (100 / cardsToShow)}%`, 
            }}
          >
            {cardData.map((card) => (
              <div
                key={card.id}
                className={`px-4 ${cardsToShow === 3 ? "w-1/3" : cardsToShow === 2 ? "w-1/2" : "w-full"}`}
              >
                <div
                  className="group bg-gray-50 dark:bg-transparent p-3 flex flex-col gap-3 rounded-lg
                    transition-all duration-300 hover:shadow-lg hover:-translate-y-1 mx-auto max-w-sm"
                >
                  <Link to={card.link} className="overflow-hidden rounded-lg">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-55 object-cover rounded-lg object-top transition-transform duration-500 hover:scale-90"
                    />
                  </Link>
                  <div className="flex flex-col gap-3 p-4">
                    <h3 className="text-2xl font-semibold dark:text-white group-hover:text-sky-600 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-lg transition-colors duration-300 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-400">
                        {card.libraries.join(" - ")}
                      </p>
                      <Link to={`/projects/${card.id}/${card.title}`} onClick={() => window.scrollTo(0, 0)}>
                        <img
                          src={externalIconUrl}
                          alt="External link"
                          className="transition-transform duration-300 hover:scale-110 hover:rotate-12"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden px-8 justify-between max-sm:flex">
          <button
            aria-label="prev card"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`flex items-center rounded-full border-2 p-3 transition ${
              activeIndex === 0
                ? "border-gray-400 opacity-50 cursor-not-allowed"
                : "border-sky-600 hover:border-sky-700 hover:scale-105 hover:opacity-90"
            }`}
          >
            <MdArrowBackIos className="text-sky-600" />
          </button>
          <button
            aria-label="next card"
            onClick={handleNext}
            disabled={activeIndex + 1 >= cardData.length - (cardsToShow - 1)}
            className={`flex items-center rounded-full border-2 p-3 transition ${
              activeIndex + 1 >= cardData.length - (cardsToShow - 1)
                ? "border-gray-400 opacity-50 cursor-not-allowed"
                : "border-sky-600 hover:border-sky-700 hover:scale-105 hover:opacity-90"
            }`}
          >
            <MdArrowForwardIos className="text-sky-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardInfoSlider;



