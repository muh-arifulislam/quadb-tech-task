import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { score: percentage, show } = data;
  const { name, image } = show;
  const score = (360 * Math.round(percentage * 100)) / 100;

  return (
    <div className="">
      <div className="relative mb-[30px] rounded-[10px]">
        <img className="w-full rounded-[10px]" src={image.medium} alt="" />
        <div
          className="absolute bottom-0 rounded-full"
          style={{
            backgroundColor: "black",
            padding: "3px",
            transform: "translateX(15px) translateY(50%)",
          }}
        >
          <div
            className="circular-progress"
            style={{
              background: `conic-gradient(green ${score}deg, #bbbb 0deg)`,
            }}
          >
            <div className="percentage-value">
              <span className="fs-4">0</span>
              <span className="" style={{ fontSize: "8px" }}>
                %
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-[1.1em] font-semibold">{name}</h2>
        <div className="flex justify-between items-end mt-[10px]">
          <h4 className="text-slate-600 text-[1em]">May 31, 2023</h4>
          <Link
            to={`/movie/${show.id}`}
            className="px-[10px] py-[5px] bg-purple-600 rounded-md"
          >
            Summary
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
