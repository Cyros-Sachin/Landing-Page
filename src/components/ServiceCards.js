import React from "react";

const services = [
  { title: "Web Development", description: "Build modern websites" },
  { title: "App Development", description: "Develop mobile applications" },
  { title: "SEO Optimization", description: "Rank higher in search results" },
];

const ServiceCards = () => {
  return (
    <section className="services" id="services" >
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="services-box">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
