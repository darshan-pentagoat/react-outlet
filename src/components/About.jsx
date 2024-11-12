import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p>This is the About page.</p>
      <Outlet />
    </div>
  );
};

export default About;
