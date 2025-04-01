import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styles from "./RiskSection.module.css";

const RiskSection = () => {
  return (
    <div className="bg-white dark:bg-gray-800 w-full py-16 md:py-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-sky-600 absolute rounded-4xl transform -rotate-2 w-full h-full top-0 left-0"></div>
        <div
          className={`absolute left-0 w-full h-full z-10 ${styles.bgLines}`}
        ></div>
        <div className="relative rounded-4xl bg-[#583FBC] shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-8 md:p-12 lg:p-16 xl:p-20 relative z-20 text-white">
            <div className="flex-1 space-y-4 md:space-y-6">
              <h3 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                Try me out, risk free!
              </h3>
              <p className="font-normal text-base md:text-lg lg:text-xl max-w-lg">
                If you're not happy with the design after the first draft, I'll
                refund your deposit,{" "}
                <span className="font-bold">no questions asked</span>.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition-all duration-300 font-medium text-base"
              >
                Contact <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskSection;
