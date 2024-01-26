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

        <div  style={{ marginLeft: '20px', marginRight: '20px'}}>
          <div className="mb-5 project-item">
            <h3 className="text-lg font-bold">{projectData.projects[0].title}</h3>
            <div>{projectData.projects[0].description}</div>
          </div>

          <div className="mb-5 project-item">
            <h3 className="text-lg font-bold">{projectData.projects[1].title}</h3>
            <div>
              <img
              src={'/images/groupify_logo.png'} alt="Groupify Logo" width="200" height="200" style={{ borderRadius: '15px' }}
              >
              </img>
            </div>
            <div>{/*projectData.projects[1].description*/}
            K-12 Teachers spend a lot of time trying to make groups in the classroom. 
            There are typically a variety of constraints teachers are looking for: 
            Certain students don’t work together, some have already worked together, etc. 
            This poses a challenge more complex than it first may seem, and is in an instance of what is known in discrete mathematics 
            as the <a href="https://en.wikipedia.org/wiki/Social_golfer_problem" style={{color: 'blue', textDecoration: "underline"}} >social golfer problem</a>. 
            Groupify is a React web application based solution for teachers to input constraints and seamlessly create groups. 
            As the Social Golfer Problem is known to be NP-hard, there are no known computationally efficient solutions. Groupify utilizes a <a href="https://www.sciencedirect.com/science/article/pii/S0377221721007773" style={{color: 'blue', textDecoration: "underline"}} >greedy algorithm</a> to efficiently find an approximated solution.
            
            </div>
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
          <section id="amazonproject">
          <div className="mb-5 project-item">
            <h3 className="text-lg font-bold">{projectData.projects[4].title}</h3>
            <div>{projectData.projects[4].description}</div>
          </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ProjectsPage;
