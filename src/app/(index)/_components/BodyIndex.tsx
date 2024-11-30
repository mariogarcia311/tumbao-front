/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const BodyIndex = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-3 gap-4 max-h-[700px] px-[5%] my-10">
      <div className="overflow-hidden cursor-pointer col-start-1 col-end-3 row-start-1 row-end-2">
        <img
          className="hover:scale-[1.03] transition duration-300 object-cover h-full w-full"
          src={
            "https://offbeat.qodeinteractive.com/wp-content/uploads/2018/04/h1-masonry-img-2.jpg"
          }
          alt={"imagen tumbao"}
        />
        <div className="overflow-hidden cursor-pointer absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
      </div>
      <div className="overflow-hidden cursor-pointer col-start-1 col-end-2 row-start-2 row-end-3">
        <img
          className="hover:scale-[1.03] transition duration-300 object-cover h-full w-full"
          src={
            "https://offbeat.qodeinteractive.com/wp-content/uploads/2018/04/h1-masonry-img-4.jpg"
          }
          alt={"imagen tumbao"}
        />
      </div>
      <div className="overflow-hidden cursor-pointer col-start-2 col-end-3 row-start-2 row-end-3">
        <img
          className="hover:scale-[1.03] transition duration-300 object-cover h-full w-full"
          src={
            "https://offbeat.qodeinteractive.com/wp-content/uploads/2018/04/h1-masonry-img-1.jpg"
          }
          alt={"imagen tumbao"}
        />
      </div>

      <div className="overflow-hidden cursor-pointer col-start-3 col-end-4 row-start-1 row-end-3">
        <img
          className="hover:scale-[1.03] transition duration-300 object-cover h-full w-full"
          src={
            "https://offbeat.qodeinteractive.com/wp-content/uploads/2018/04/h1-masonry-img-3-550x1100.jpg"
          }
          alt={"imagen tumbao"}
        />
      </div>
    </div>
  );
};

export default BodyIndex;
