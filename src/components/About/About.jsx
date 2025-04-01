import { motion } from "framer-motion";
import Skills from "./Skills";
import aboutImageDark from "/src/assets/images/skillsDark.svg";
import aboutImageLight from "/src/assets/images/skillsLight.svg";
import dot1 from "../../assets/images/dot.svg";
import { ThemeContext } from "../../context/ThemeProvider";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGithub,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import {
  SiJavascript,
  SiFigma,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { useContext } from "react";

const iconVariants = {
  animate: (delay) => ({
    y: [0, -10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  }),
};

const smallScreenVariants = {
  animate: (delay) => ({
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: delay,
    },
  }),
};

const About = ({ id }) => {
  const { theme } = useContext(ThemeContext);

  const icons = [
    { icon: <FaHtml5 className="text-orange-500 text-6xl" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500 text-6xl" />, name: "CSS3" },
    {
      icon: <SiJavascript className="text-yellow-400 text-6xl" />,
      name: "JavaScript",
    },
    { icon: <FaReact className="text-blue-400 text-6xl" />, name: "React" },
    { icon: <SiFigma className="text-pink-500 text-6xl" />, name: "Figma" },
    { icon: <FaGithub className="text-gray-600 text-6xl" />, name: "GitHub" },
    { icon: <SiRedux className="text-purple-500 text-6xl" />, name: "Redux" },
    {
      icon: <SiTypescript className="text-blue-600 text-6xl" />,
      name: "TypeScript",
    },
    {
      icon: <SiTailwindcss className="text-teal-400 text-6xl" />,
      name: "Tailwind CSS",
    },
    { icon: <FaNodeJs className="text-green-500 text-6xl" />, name: "Node.js" },
    { icon: <FaDocker className="text-blue-500 text-6xl" />, name: "Docker" },
  ];

  return (
    <section id={id} className="bg-white dark:bg-gray-800 w-full">
      <div className="flex items-center justify-center h-24">
        <hr className="border-t-2 border-dashed border-gray-400 w-full" />
        <img src={dot1} alt="" />
        <hr className="border-t-2 border-dashed border-gray-400 w-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-13 max-md:gap-0">
          <div className="flex-1 hidden lg:block">
            <img
              src={theme === "dark" ? aboutImageDark : aboutImageLight}
              alt="about"
              className="max-w-full rounded-lg"
            />
          </div>
          <div className="flex-1 flex flex-wrap justify-center gap-6 md:hidden">
            {icons.map((item, index) => {
              const delay = index % 2 === 0 ? 0.5 : 1.5; 
              return (
                <motion.div
                  key={index}
                  animate="animate"
                  custom={delay} 
                  variants={smallScreenVariants}
                  title={item.name}
                >
                  {item.icon}
                </motion.div>
              );
            })}
          </div>
          <div className="hidden md:flex lg:hidden flex-wrap justify-center gap-6">
            {icons.map((item, index) => (
              <motion.div
                key={index}
                animate="animate"
                custom={index * 0.5}
                variants={iconVariants}
                title={item.name}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>
          <div className="flex-1 text-center lg:text-left mt-6 lg:mt-0">
            <h2 className="text-3xl font-bold dark:text-white  mb-6">
              About Me
            </h2>
            <p className="text-gray-400 mb-8">
             Hello! I’m Hiba Allah Mahmoud Abbas, from Hama and currently residing in Damascus. I am studying Informatics Engineering at Damascus University, specializing in Artificial Intelligence. My journey in programming began in my third year of university when I developed a Dashboard for Admin and Guide for the TrkSyr tourism project. Since then, I have been passionate about frontend development, enhancing user experiences by designing and building interactive and visually appealing web applications.
            .
            </p>
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
