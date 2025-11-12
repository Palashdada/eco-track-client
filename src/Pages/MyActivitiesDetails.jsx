import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const MyActivitiesDetails = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  useEffect(() => {
    fetch(`https://eco-track-server-sable.vercel.app/my-activities/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setActivity(data);
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return (
      <span className="loading loading-bars loading-xl flex justify-center items-center mx-auto"></span>
    );
  }
  const handleUpdateStatus = () => {
    fetch(
      `https://eco-track-server-sable.vercel.app/user-challenges/${id}/status`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success(data.message);
          setActivity((prev) => ({ ...prev, status }));
        } else {
          toast.error(data.message);
        }
      });
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-3xl font-bold text-green-700 mb-6">
        {activity.challenge.title}
      </h2>
      <p>Status: {activity.status}</p>
      <p>Progress: {activity.progress}%</p>
      <p>Joined On: {new Date(activity.joinDate).toLocaleDateString()}</p>
      <p>{activity.challenge.description}</p>
      <div className="mt-4">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="select select-bordered w-full mb-2"
        >
          <option>Not Started</option>
          <option>Ongoing</option>
          <option>Finished</option>
        </select>
        <button onClick={handleUpdateStatus} className="btn btn-success w-full">
          Update Status
        </button>
      </div>
    </div>
  );
};

export default MyActivitiesDetails;
