import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";

const Contact = ({ id }) => {
  return (
    <section id={id} className="bg-white dark:bg-gray-800 w-full mt-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-13 max-md:gap-0">
        <div className="text-center md:text-left">
          <p className="text-xl font-medium text-sky-400">Contact</p>
          <h1 className="mb-6 text-4xl font-semibold dark:text-white">
            Let’s Discuss Your <span className="text-sky-600">Project</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6 max-md:gap-0">
            <div className="flex items-center gap-5 p-6 max-md:flex-col ">
              <div className="flex justify-center items-center bg-sky-600 rounded-lg w-15 h-14">
                <FiPhoneCall className="text-white" size={25} />
              </div>
              <div className="max-md:text-center">
                <p className="text-gray-400 font-medium">Call me</p>
                <span className="text-gray-800 dark:text-white">
                  +963 994027580
                </span>
              </div>
            </div>
            <div className="flex items-center gap-5 p-6 max-md:flex-col">
              <div className="flex justify-center items-center bg-sky-600 rounded-lg w-15 h-14">
                <LuMail className="text-white" size={25} />
              </div>
              <div className="max-md:text-center">
                <p className="text-gray-400 font-medium">Email me</p>
                <span className="text-gray-800 dark:text-white text-wrap">
                  hiba2003abbas@gmail.com
                </span>
              </div>
            </div>
            <div className="flex items-center gap-5 p-6 max-md:flex-col">
              <div className="flex justify-center items-center bg-sky-600 rounded-lg w-15 h-14">
                <GrLocation className="text-white" size={25} />
              </div>
              <div className="max-md:text-center">
                <p className="text-gray-400 font-medium">Address</p>
                <span className="text-gray-800 dark:text-white">
                  Damascus, Syria
                </span>
              </div>
            </div>
          </div>

          <form className="w-full sm:w-full md:w-full">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                className="w-full p-3 dark:text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full p-3 dark:text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600"
                required
              />
            </div>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              className="w-full p-3 dark:text-white mt-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-3 mt-6 dark:text-white border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="mt-6 px-10 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
