import React, { useEffect } from "react";
import ProjectInfo from "../components/Projects/ProjectInfo";
import CardInfoSlider from "../components/Projects/ProjectsSlider";
import { cardData } from "../components/Projects/CardData";

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectInfo />
      <CardInfoSlider cardData={cardData} />
    </>
  );
};

export default ProjectDetails;


