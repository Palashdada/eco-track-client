import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { AuthContext } from "../AuthContex";

const AddChallenge = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

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
      createdBy: user.email,
    };

    setLoading(true);

    fetch("http://localhost:3000/challenges/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Challenge added successfully!");
          navigate("/challenges");
          setLoading(false);
          console.log(data.success);
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        Add New Challenge
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-base-100 shadow-lg rounded-lg p-8 space-y-4"
      >
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Category</option>
            <option>Energy Conservation</option>
            <option>Water Conservation</option>
            <option>Sustainable Transport</option>
            <option>Waste Reduction</option>
            <option>Green Living</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Duration (days)</label>
            <input
              type="number"
              name="duration"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Impact Metric</label>
            <input
              type="text"
              name="impactMetric"
              placeholder="e.g., kg plastic saved"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Target</label>
          <input
            type="text"
            name="target"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Start Date</label>
            <input
              type="date"
              name="startDate"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">End Date</label>
            <input
              type="date"
              name="endDate"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-success w-full text-white mt-4"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Challenge"}
        </button>
      </form>
    </div>
  );
};

export default AddChallenge;
