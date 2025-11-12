import React, { useEffect, useState } from "react";

const LiveStatistics = () => {
  const [statistics, setStatistics] = useState(null);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    fetch("https://eco-track-server-sable.vercel.app/live-statics")
      .then((res) => res.json())
      .then((data) => {
        setStatistics(data);
        setLoding(false);
      });
  }, []);
  if (loding) {
    return (
      <span className="loading loading-bars loading-xl flex justify-center items-center mx-auto"></span>
    );
  }
  return (
    <div className="my-12 bg-green-50 rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
        Community Impact
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <p className="text-4xl font-bold text-green-600">
            {statistics.totalChallenges}
          </p>
          <p className="text-gray-700 mt-1">Challenges</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-green-600">
            {statistics.totalParticipants}
          </p>
          <p className="text-gray-700 mt-1">Participants</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-green-600">
            {statistics.totalTips}
          </p>
          <p className="text-gray-700 mt-1">Community Tips</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-green-600">
            {statistics.totalEvents}
          </p>
          <p className="text-gray-700 mt-1">Upcoming Events</p>
        </div>
      </div>
    </div>
  );
};

export default LiveStatistics;
