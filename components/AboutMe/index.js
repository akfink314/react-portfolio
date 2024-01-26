import React, { useState } from "react";

const AboutMe = ({ img, name, description, onClick }) => {
    return (
      <div style={{ paddingLeft: '10px',paddingRight: '300px'}}>
        <p> My name is Alexandra. I am a senior at the University of Michigan where I study Computer Science and Computational Cognitive Science💻🧠 I previously interned at Amazon Robotics in Seattle, where I worked with an awesome team 
          and launched an <a href='/projects#amazonproject' style={{color: 'blue', textDecoration: "underline"}} > internal tool </a> for Robot Visualization. I recieved an offer to return full time as a Software Engineer, but am looking for work in the East Coast. I love reading (checkout my Goodreads), camping, high adrenaline sports, and working with awesome people.
        </p>
      </div>
    );
  };
  
export default AboutMe;
