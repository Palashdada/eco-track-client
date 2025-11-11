import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthContex";

const EditChallenge = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [challenge, setChallenge] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/challenges/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setChallenge(data);
        setLoading(false);
      })
      .catch((err) => toast.error("Failed to load challenge"));
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      category: e.target.category.value,
      description: e.target.description.value,
      duration: e.target.duration.value,
      target: e.target.target.value,
      impactMetric: e.target.impactMetric.value,
      imageUrl: e.target.imageUrl.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      userEmail: user?.email,
    };

    setLoading(true);

    fetch(`http://localhost:3000/challenges/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success(data.message);
          navigate("/challenges");
          setLoading(false);
        }
      });
  };

  if (loading) {
    return (
      <span className="loading loading-bars loading-xl flex justify-center items-center mx-auto"></span>
    );
  }
  if (!challenge) {
    return (
      <p className="text-center text-red-500 mt-10">
        Challenge not found or failed to load.
      </p>
    );
  }
  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        Edit Challenge
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-base-100 shadow-lg rounded-lg p-8 space-y-4"
      >
        <input
          type="text"
          name="title"
          defaultValue={challenge.title}
          className="input input-bordered w-full"
          required
        />
        <select
          name="category"
          defaultValue={challenge.category}
          className="select select-bordered w-full"
          required
        >
          <option>Energy Conservation</option>
          <option>Water Conservation</option>
          <option>Sustainable Transport</option>
          <option>Waste Reduction</option>
          <option>Green Living</option>
        </select>
        <textarea
          name="description"
          defaultValue={challenge.description}
          className="textarea textarea-bordered w-full"
          required
        />
        <input
          type="number"
          name="duration"
          defaultValue={challenge.duration}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="target"
          defaultValue={challenge.target}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="impactMetric"
          defaultValue={challenge.impactMetric}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="imageUrl"
          defaultValue={challenge.imageUrl}
          className="input input-bordered w-full"
          required
        />
        <input
          type="date"
          name="startDate"
          defaultValue={
            new Date(challenge.startDate).toISOString().split("T")[0]
          }
          className="input input-bordered w-full"
          required
        />
        <input
          type="date"
          name="endDate"
          defaultValue={new Date(challenge.endDate).toISOString().split("T")[0]}
          className="input input-bordered w-full"
          required
        />

        <button
          type="submit"
          className="btn btn-success w-full"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Challenge"}
        </button>
      </form>
    </div>
  );
};

export default EditChallenge;
