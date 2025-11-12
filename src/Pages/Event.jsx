import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import SkeletonCard from "../Components/SkeletonCard";

const Event = () => {
  const [events, setEvents] = useState([]);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    fetch("https://eco-track-server-sable.vercel.app/all-events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoding(false);
      });
  }, []);
  if (loding) {
    return (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }
  return (
    <div className="my-5">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
        Upcoming Events
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-5"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              {event.title}
            </h3>
            <p className="text-gray-500 text-sm mb-1">
              {new Date(event.date).toLocaleDateString()}
              {event.location}
            </p>
            <p className="text-gray-700 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
      <Link
        to={"/challenges"}
        className="btn btn-success mx-auto flex justify-center items-center mt-5 w-full"
      >
        See All
      </Link>
    </div>
  );
};

export default Event;
