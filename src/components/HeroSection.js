import React from "react";
import "../styles.css";

const HeroSection = () => {
  return (
    <section className="hero" id="hero" >
      <video autoPlay loop muted className="hero-video">
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>Welcome to My Website</h1>
        <p>We provide high-quality solutions for your needs.</p>
      </div>
    </section>
  );
};

export default HeroSection;
