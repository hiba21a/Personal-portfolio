import React from "react";
import Timeline from "./TimeLine";
import BackgroundLeft from "./BackgroundLeft";
import BackgroundRight from "./BackgroundRight";

const EducationExperience = ({ id }) => {
  const items = [
    {
      title: "Informatics Engineering Student",
      description: `I am currently studying Informatics Engineering in Damascus University with a specialization in Artificial Intelligence at Damascus University. During my third year, I developed a Dashboard for Admin and Guide as part of the TrkSyr tourism project. This project ignited my passion for UI/UX development and web applications.`,
    },
    {
      title: "Frontend Developer",
      description:
      "As a Frontend Developer Intern at Vica Web Solutions, I work on creating user interfaces using HTML, CSS, and JavaScript. My role involves translating Figma designs into functional layouts and integrating APIs into projects. I also use React to build dynamic and responsive web applications, ensuring an engaging user experience. Throughout this internship, I've focused on improving the interactivity and performance of the applications I contribute to."
    },
  ];

  return (
    <section id={id} className="bg-white dark:bg-gray-800 w-full mt-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="hidden sm:block">
          <BackgroundRight />
        </div>
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-sky-600 font-medium text-[20px] leading-[1.5]">
            Education and Experience
          </h3>
          <h2 className="text-center dark:text-white pb-10 font-semibold text-[40px] leading-[1.2]">
            Education & Experience
          </h2>

          <div className="grid grid-cols-1 mt-8 mb-10">
            <div className="relative flex items-center justify-center">
              <Timeline items={items} />
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          <BackgroundLeft />
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
