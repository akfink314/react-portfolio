import { useRef, useEffect, useState } from "react";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import React from "react";
import Header from "../../components/Header";
import data from "../../data/portfolio.json";
import Head from "next/head";
import Footer from "../../components/Footer";
import projectData from "../../data/projects.json";


const ProjectsPage = () => {
  const textOne = useRef();
  const { theme, setTheme } = useState(true);
  const [mounted, setMounted] = useState(true);

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  const animateProjects = () => {
    const projects = document.querySelectorAll(".project-item");

    stagger(
      Array.from(projects),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0 },
      0.2 // Adjust the stagger delay as needed
    );
  };

  useEffect(() => {
    animateProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run this effect only once on component mount

  return (
    <div>
      <Head>
        <title>{data.name}</title>
      </Head>
      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>
      <div className="container mx-auto mb-10">
        <Header />
        <div>
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-5xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5 mb-5"
            >
              Projects
            </h1>
          </div>
        </div>

        <div className="mb-5 project-item">
          <h3 className="text-lg font-bold">{projectData.projects[0].title}</h3>
          <div>{projectData.projects[0].description}</div>
        </div>

        <div className="mb-5 project-item">
          <h3 className="text-lg font-bold">{projectData.projects[1].title}</h3>
          <div>{projectData.projects[1].description}</div>
        </div>

        <div className="mb-5 project-item">
          <h3 className="text-lg font-bold">{projectData.projects[2].title}</h3>
          <div>{projectData.projects[2].description}</div>
        </div>

        <div className="mb-5 project-item">
          <h3 className="text-lg font-bold">{projectData.projects[3].title}</h3>
          <div style={{display: "flex"}}>
            <img
              src={`/images/cells/cell_detection_1.png`} alt="Cell detection example 1" width="200" height="200"
            ></img>
            <img
              src={`/images/cells/cell_detection_2.png`} alt="Cell detection example 1" width="200" height="200"
            ></img>
            <img
              src={`/images/cells/cell_detection_3.png`} alt="Cell detection example 1" width="200" height="200"
            ></img>
            <img
              src={`/images/cells/cell_detection_4.png`} alt="Cell detection example 1" width="200" height="200"
            ></img>
          </div>
          <div>{projectData.projects[3].description}</div>
        </div>



        <div className="mb-5 project-item">
          <h3 className="text-lg font-bold">{projectData.projects[4].title}</h3>
          <div>{projectData.projects[4].description}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectsPage;
