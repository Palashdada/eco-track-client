import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContex";
import { Link } from "react-router";

const MyActivities = () => {
  const { user } = useContext(AuthContext);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    fetch(
      `https://eco-track-server-sable.vercel.app/my-activities?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setActivities(data);
        setLoading(false);
      });
  }, [user]);
  if (loading) {
    return (
      <span className="loading loading-bars loading-xl flex justify-center items-center mx-auto"></span>
    );
  }
  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        My Activities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activities.map((a) => (
          <div key={a._id} className="card bg-base-100 shadow-lg p-4">
            <h3 className="text-xl font-bold">{a.challenge?.title}</h3>
            <p>Status: {a.status}</p>
            <p>Progress: {a.progress}%</p>
            <Link
              to={`/myactivities/${a._id}`}
              className="btn btn-sm btn-success mt-2"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyActivities;
