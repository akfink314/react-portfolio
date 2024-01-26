// pages/blog/index.js
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import React from "react";
import Header from "../../components/Header";
import data from "../../data/about.json"
import Head from "next/head";
import Footer from "../../components/Footer";

const AboutPage = () => {
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
        More About Me
    </h1>
        <div  style={{ marginLeft: '20px', marginRight: '20px'}}>

          <div className="mb-5 project-item">

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', paddingBottom:'20px'}}>
              <div style={{ flexBasis: '68%', marginRight: '10px' }}>
              <h3 className="text-lg font-bold">{data.items[0].title}</h3>
                {data.items[0].description}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '30%' }}>
                <img
                  src={'/images/fc/fc8.png'} 
                  alt="Friendship Circle Camp" 
                  width="200" 
                  height="200" 
                  style={{ borderRadius: '15px', marginBottom: '10px' }}
                />
                <img
                  src={'/images/fc/fc7.png'} 
                  alt="Friendship Circle Camp" 
                  width="200" 
                  height="200" 
                  style={{ borderRadius: '15px' }}
                />
              </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', paddingBottom:'20px'} }>
              <div style={{ flexBasis: '68%', marginRight: '10px' }}>
              <h3 className="text-lg font-bold">{data.items[1].title}</h3>
                {data.items[1].description}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '30%' }}>
                <img
                  src={'/images/byod_team.png'} 
                  alt="Friendship Circle Camp" 
                  width="300" 
                  height="300" 
                  style={{ borderRadius: '15px', marginBottom: '10px' }}
                />
              </div>
          </div>
          
          
 



          </div>
        </div>
        <Footer />
    </div>
    </div>
    
  );
};

export default AboutPage;
