import React from "react";
import myImg from "../../assets/images/myImg3.png";
import squares from "../../assets/images/squares.svg";
import gradiant from "../../assets/images/BlurGradient.webp";
import circle from "../../assets/images/Circle.svg";
import lines from "../../assets/images/LinesHreo.svg";

const Hero = ({ id }) => {
  return (
    <section id={id} className="bg-white dark:bg-gray-800 w-full relative">
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
        <img
          src={lines}
          alt="lines"
          className="w-full object-cover object-left  max-md:hidden"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={gradiant} alt="gradient" className="w-full h-full" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-10 md:pb-25">
          <div className="flex flex-col items-center md:items-start w-full md:w-[500px] text-center md:text-left">
            <h1 className="text-3xl md:text-4xl dark:text-white">
              HEY! <span className="font-bold">I’m Hiba,</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-6 md:mb-8">
              Frontend Developer
            </h2>
            <p className="text-gray-400 mb-6 md:mb-8">
              Hi there! I'm a Frontend Developer specializing in crafting
              seamless user experiences and dynamic interfaces using modern web
              tools.
            </p>
            <button className="inline-block bg-blue-300 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition duration-300">
              <a
                href="/pdfs/HibaMahmoudAbbasCv.pdf"
                download="HibaMahomoudAbbas.pdf"
                className="block w-full h-full"
              >
                Download CV
              </a>
            </button>
          </div>
          <div className="flex justify-center w-full md:w-auto mt-8 md:mt-0">
            <div className="relative bg-cover bg-center bg-no-repeat w-[300px] h-[320px] md:w-[420px] md:h-[440px]">
              <img
                src={circle}
                alt="circle"
                className="w-[280px] h-[260px] md:w-[410px] md:h-[380px] absolute top-[50px]"
              />
              <img
                src={myImg}
                alt="personal image"
                className="w-[190px] md:w-[230px] absolute -top-[66px] right-[25%] z-10 max-md:h-[372px]"
              />
              <img
                src={squares}
                alt="squares"
                className="absolute top-[50px] z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
