import React, { useEffect, useState } from "react";

const Banners = () => {
  const [loging, setLoding] = useState(true);
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/hero-challenges")
      .then((res) => res.json())
      .then((data) => {
        setBanner(data);
        setLoding(false);
      });
  }, []);
  if (loging) {
    return (
      <span className="loading loading-bars loading-xl flex justify-center items-center mx-auto"></span>
    );
  }
  console.log(banner);
  return (
    <div>
      <div className="carousel w-full relative ">
        {banner.map((b, index) => (
          <div
            key={index}
            id={`item${index + 1}`}
            className="carousel-item w-full"
          >
            <img src={b.imageUrl} className="w-full h-[420px] object-cover" />
            <div className=" absolute bottom-2 flex flex-col justify-center items-center text-center p-4 w-full  ">
              <h2 className="text-3xl font-bold mb-3 text-white max-w-xl">
                {b.title}
              </h2>
              <p className="mb-4  text-white max-w-xl">{b.description}</p>
              <a href={`/challenges/${b._id}`} className="btn btn-primary">
                View Challenge
              </a>
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
