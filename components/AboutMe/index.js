import React, { useState } from "react";

const AboutMe = ({ img, name, description, onClick }) => {
    return (
      <div style={{ paddingLeft: '10px'}}>
        <p>Hi!👋My name is Alexandra. I am a senior at the University of Michigan</p>
        <p>where I study Computer Science and Computational Cognitive Science💻🧠</p>
      </div>
    );
  };
  
export default AboutMe;
