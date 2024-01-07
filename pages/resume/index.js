// pages/blog/index.js
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import React from "react";
import Header from "../../components/Header";
import data from "../../data/portfolio.json"
import Head from "next/head";
import Footer from "../../components/Footer";
import Resume from "../resumeold"

const ResumePage = () => {
  const textOne = useRef();
  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);
  return (
    <div>
        <Head>
            <title>{data.name}</title>
        </Head>
        <div className="gradient-circle"></div>
        <div className="gradient-circle-bottom"></div>
        <div className="container mx-auto mb-10">
        <Header/>
        <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-5xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              Resume
            </h1>
        <div>
            
        </div>
        <Footer />
    </div>
    </div>
    
  );
};

export default ResumePage;
