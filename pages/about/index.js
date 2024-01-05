// pages/blog/index.js
import React from "react";
import Header from "../../components/Header";
import data from "../../data/portfolio.json"
import Head from "next/head";
import Footer from "../../components/Footer";

const AboutPage = () => {
    
  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  

  const handleAboutMeScroll = () => {
    window.scrollTo({
      top: aboutMeRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
        <Head>
            <title>{data.name}</title>
        </Head>
        <div className="gradient-circle"></div>
        <div className="gradient-circle-bottom"></div>
        <div className="container mx-auto mb-10"></div>
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutMeScroll = {handleAboutMeScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <Footer />
    </div>
    
  );
};

export default AboutPage;
