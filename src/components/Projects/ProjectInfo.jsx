import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { cardData } from "./CardData";
import externalIconUrl from "../../assets/images/extenalIcon.svg";
import externalIconUrlW from "../../assets/images/Icon.svg";
import { LuExpand } from "react-icons/lu";

const ProjectInfo = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const [myProject, setMyProject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const currentProject = cardData.find(
      (project) => project.id === parseInt(id)
    );
    setMyProject(currentProject || {});
  }, [id]);

  if (!myProject) return <div>Project not found</div>;

  return (
    <section className="bg-white dark:bg-gray-800 w-full mt-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative group">
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-black/30 rounded-lg">
            <button
              aria-label="Expand image"
              onClick={() => setFullScreen(!fullScreen)}
              className="p-3 text-white/90 rounded-full hover:text-white transition-colors shadow-lg"
            >
              <LuExpand size={45} />
            </button>
            <Link
              to={myProject.link}
              target="_blank"
              className="p-3 text-white/90 rounded-full hover:text-white transition-colors shadow-lg"
            >
              <img
                src={externalIconUrlW}
                alt="External link"
                className="w-10 h-10"
              />
            </Link>
          </div>
          <img
             className={`w-full h-100 rounded-lg transition-all duration-300  ${
               fullScreen
                 ? "fixed inset-0 w-screen h-screen object-contain z-50 opacity-100 bg-black/50 transition-opacity duration-300"
                 : ""
             }`}
             src={myProject.img}
             alt="Project visual"
             onClick={() => fullScreen && setFullScreen(false)}
           />
        </div>
        
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="">
            <h3 className="text-3xl font-bold dark:text-white">{myProject.title}</h3>
            <span className="text-xs text-gray-600 dark:text-gray-400">{myProject.data}</span>
            </div>
            <Link to={myProject.link} target="_blank">
              <img
                src={externalIconUrl}
                alt="External link"
                className="transition-transform duration-300 hover:scale-110 hover:rotate-12"
              />
            </Link>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{myProject.description}</p>
          <div className="space-y-4">
            <div className="dark:text-gray-400">
              <span className="font-semibold dark:text-white">Basic Languages : </span>
              {myProject.languages?.join(", ")}
            </div>
            <div className="dark:text-gray-400">
              <span className="font-semibold dark:text-white">Frameworks : </span>
              {myProject.frameworks?.join(", ")}
            </div>
            <div className="dark:text-gray-400">
              <span className="font-semibold dark:text-white">Libraries : </span>
              {myProject.libraries?.join(", ")}
            </div>
          </div>
          <Link
            to={myProject.repo}
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 w-fit"
          >
            View Repository
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;




