import React from "react";
import { FaChartLine, FaShareAlt, FaUserPlus } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUserPlus className="text-green-700 text-4xl mb-3" />,
      title: "Join a Challenge",
      description:
        "Select a sustainability challenge that matches your interest and goals.",
    },
    {
      icon: <FaChartLine className="text-green-700 text-4xl mb-3" />,
      title: "Track Your Progress",
      description:
        "Monitor your daily activities and see your impact grow over time.",
    },
    {
      icon: <FaShareAlt className="text-green-700 text-4xl mb-3" />,
      title: "Share Tips",
      description:
        "Post eco-friendly tips and inspire others in the community.",
    },
  ];
  return (
    <div className="my-5">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
        How It Works
      </h2>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-md hover:shadow-lg transition"
          >
            {step.icon}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
