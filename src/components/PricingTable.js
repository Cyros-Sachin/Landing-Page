import React from "react";

const plans = [
  { name: "Basic", price: "$10/month"},
  { name: "Standard", price: "$20/month"},
  { name: "Premium", price: "$30/month"},
];

const PricingTable = () => {
  return (
    <section className="pricing" id="pricing" >
      <h2>Pricing Plans</h2>
      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3>{plan.name}</h3>
            <h4>{plan.price}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingTable;
