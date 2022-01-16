import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Our #Indian's Pizzeria have been trained for safe food delivery home without coming in direct contact with you, through “Zero Contact Delivery”. So order food online on the Indian's Pizzeria food app without a hint of worry!

Turn your sweet moments into treasured memories by trying our online food delivery on our food delivery app.
        </p>
      </div>
    </div>
  );
}

export default About;
