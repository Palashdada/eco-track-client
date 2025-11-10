import React, { useEffect, useState } from "react";

const RecentTips = () => {
  const [tips, setTips] = useState([]);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/recent-tips")
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setLoding(false);
      });
  }, []);
  if (loding) {
    return (
      <span className="loading loading-bars loading-xl flex justify-center items-center mx-auto"></span>
    );
  }
  if (tips.length === 0)
    return (
      <div className="text-center py-10 text-gray-500">
        No community tips available.
      </div>
    );
  return (
    <div className="py-5">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
        Recent Community Tips
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-5 bg-white"
          >
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              {tip.title}
            </h3>
            <p className="text-gray-700 text-sm mb-3">{tip.content}</p>
            <div className="flex justify-between text-sm text-gray-500 border-t pt-2">
              <p> {tip.authorName}</p>
              <p>{tip.upvotes}</p>
              {new Date(tip.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTips;
