import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthContex";

const Banners = () => {
  const [banner, setBanner] = useState([]);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    setLoding(true);
    fetch("https://eco-track-server-sable.vercel.app/hero-challenges")
      .then((res) => res.json())
      .then((data) => {
        setBanner(data);
        setLoding(false);
      });
  }, []);
  if (loding) {
    return (
      <span className="loading loading-bars loading-xl flex justify-center items-center mx-auto"></span>
    );
  }

  return (
    <div>
      <div className="carousel w-full relative ">
        {banner.map((a, index) => (
          <div
            key={index}
            id={`item${index + 1}`}
            className="carousel-item w-full"
          >
            <img src={a.imageUrl} className="w-full h-[420px] object-cover" />
            <div className=" absolute bottom-2 flex flex-col justify-center items-center text-center p-4 w-full  ">
              <h2 className="text-3xl font-bold mb-3 text-white max-w-xl">
                {a.title}
              </h2>
              <p className="mb-4  text-white max-w-xl">{a.description}</p>
              <Link to={`/challenges/${a._id}`} className="btn btn-primary">
                View Challenge
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {banner.map((_, index) => (
          <a href={`#item${index + 1}`} className="btn btn-xs">
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Banners;
