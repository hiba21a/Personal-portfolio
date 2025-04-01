
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
import { cardData } from "./CardData";
import externalIconUrl from "../../assets/images/extenalIcon.svg";

const Projects = ({ id }) => {
  const [visibleCards, setVisibleCards] = useState(6);
  const [initialCards, setInitialCards] = useState(6);
  const cardsPerLoad = 3;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setInitialCards(3);
        setVisibleCards(3);
      } else if (window.innerWidth <= 768) {
        setInitialCards(4);
        setVisibleCards(4);
      } else {
        setInitialCards(6);
        setVisibleCards(6);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const loadMoreCards = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCards((prev) => prev + cardsPerLoad);
      setIsLoading(false);
    }, 300);
  };

  const allCardsVisible = visibleCards >= cardData.length;

  return (
    <section id={id} className="bg-white dark:bg-gray-800 w-full mt-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-13 max-md:gap-0">
        <div className="flex items-center justify-between max-md:flex-col max-md:mb-10">
          <div className="w-sm max-md:w-full text-center md:text-left">
            <p className="text-xl font-medium text-sky-400">Portfolio</p>
            <h1 className="mb-6 text-4xl font-semibold dark:text-white">
              My Creative Works Latest{" "}
              <span className="text-sky-600">Projects</span>
            </h1>
          </div>
          <Link
            to="https://github.com/hiba21a"
            className="flex items-center gap-2 px-10 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition duration-300"
          >
            View Github <MdOutlineArrowOutward />
          </Link>
        </div>

        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8">
          {cardData.slice(0, visibleCards).map((card, index) => {
            const isNewCard =
              index >= visibleCards - cardsPerLoad &&
              visibleCards > initialCards;

            return (
              <div
                className={`
                  group bg-gray-50 dark:bg-transparent p-3 h-max flex flex-col gap-3 rounded-lg
                  transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                  ${isNewCard ? "animate-fade-in" : ""}
                `}
                key={card.id}
                style={{
                  animationDelay: isNewCard
                    ? `${(index - (visibleCards - cardsPerLoad)) * 0.1}s`
                    : "0s",
                }}
              >
                <Link to={card.link} className="overflow-hidden rounded-lg">
                  <img
                    src={card.img}
                    alt=""
                    className="w-full h-55 object-cover rounded-lg object-top 
                      transition-transform duration-500 hover:scale-90"
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
                    <Link to={`/projects/${card.id}/${card.title}`}>
                      <img
                        src={externalIconUrl}
                        alt="External link"
                        className="transition-transform duration-300 hover:scale-110 hover:rotate-12"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {!allCardsVisible && cardData.length > initialCards && (
          <div className="flex justify-center items-center mt-8">
            <button
              onClick={loadMoreCards}
              disabled={isLoading}
              className={`
                flex items-center gap-2 px-10 py-3 bg-sky-600 text-white rounded-lg 
                transition duration-300
                ${isLoading ? "opacity-75" : "hover:bg-sky-700"}
              `}
            >
              {isLoading ? "Loading..." : "View More"}
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Projects;
