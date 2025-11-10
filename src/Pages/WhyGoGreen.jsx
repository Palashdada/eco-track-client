import React from "react";

const WhyGoGreen = () => {
  const benefits = [
    "Reduce your carbon footprint",
    "Save energy and resources",
    "Promote a healthier lifestyle",
    "Support local eco-friendly initiatives",
    "Inspire your community",
  ];
  return (
    <div>
      <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
        Why Go Green?
      </h2>

      <ul className="max-w-4xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-6 list-disc list-inside text-gray-700 text-lg">
        {benefits.map((benefit, index) => (
          <li key={index} className="p-2 hover:bg-green-100 rounded transition">
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyGoGreen;
