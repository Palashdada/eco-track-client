import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const ActiveChallenges = () => {
  const [active, setActive] = useState([]);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/active-challenges")
      .then((res) => res.json())
      .then((data) => {
        setActive(data);
        setLoding(false);
      });
  }, []);
  if (loding) {
    return (
      <span className="loading loading-bars loading-xl flex justify-center items-center mx-auto"></span>
    );
  }
  if (active.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No active challenges available.
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
        Active Challenges
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {active.map((a) => (
          <div
            key={a._id}
            className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img src={a.imageUrl} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{a.title}</h3>
              <p className="text-green-600 font-medium mb-2">{a.category}</p>
              <p className="text-gray-700 mb-2">{a.description}</p>
              <p className="text-gray-500 text-sm mb-4">
                Duration: {a.duration} days | Participants: {a.participants} |
                Target: {a.impactMetric}
              </p>
              <Link
                to={`/challenges/${a._id}`}
                className="btn btn-success w-full text-white"
              >
                View Challenge
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveChallenges;
