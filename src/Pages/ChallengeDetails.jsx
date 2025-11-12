import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { AuthContext } from "../AuthContex";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ChallengeDetails = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);
  const [loding, setLoding] = useState(true);
  const [joining, setJoining] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  //   console.log(user);

  useEffect(() => {
    fetch(`https://eco-track-server-sable.vercel.app/challenges/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setChallenge(data);
        setLoding(false);
      });
  }, [id]);
  if (loding) {
    return (
      <span className="loading loading-bars loading-xl flex justify-center items-center mx-auto"></span>
    );
  }
  const handleJoin = () => {
    setJoining(true);

    fetch(`https://eco-track-server-sable.vercel.app/challenges/join/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.uid,
        email: user.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("After Joyen", data);
        setJoining(false);
        if (data) {
          toast.success("You successfully joined this challenge!");
        } else {
          toast.error(data.message);
          setJoining(false);
        }
      });
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this challenge!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://eco-track-server-sable.vercel.app/challenges/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userEmail: user.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              Swal.fire("Deleted!", data.message, "success");
              navigate("/challenges");
            } else {
              Swal.fire("Error!", data.message, "error");
            }
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to delete challenge.", "error");
          });
      }
    });
  };
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={challenge.imageUrl}
            alt={challenge.title}
            className="w-full lg:w-96 h-64 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl text-green-700">
            {challenge.title}
          </h2>
          <p className="text-gray-600">
            <strong>Category:</strong> {challenge.category}
          </p>
          <p>{challenge.description}</p>
          <p>
            <strong>Duration:</strong> {challenge.duration} days
          </p>
          <p>
            <strong>Target:</strong> {challenge.target}
          </p>
          <p>
            <strong>Participants:</strong> {challenge.participants}
          </p>
          <p>
            <strong>Impact Metric:</strong> {challenge.impactMetric}
          </p>
          <p>
            <strong>Start:</strong>{" "}
            {new Date(challenge.startDate).toLocaleDateString()}
          </p>
          <p>
            <strong>End:</strong>{" "}
            {new Date(challenge.endDate).toLocaleDateString()}
          </p>

          <div className="card-actions mt-4 ">
            <button
              disabled={joining}
              onClick={handleJoin}
              className="btn btn-success text-white"
            >
              {joining ? "Joining..." : "Join Challenge"}
            </button>
            {user?.email === challenge.createdBy && (
              <div>
                <button
                  className="btn btn-warning"
                  onClick={() => navigate(`/challenges/edit/${challenge._id}`)}
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(challenge._id)}
                  className="btn btn-error"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetails;
