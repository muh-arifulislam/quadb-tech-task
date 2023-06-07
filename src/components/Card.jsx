import React, { useContext } from "react";
import { Link } from "react-router-dom";
import dateFormat, { masks } from "dateformat";
const Card = ({ data }) => {
  const { score, show } = data;
  const { name, image } = show;
  const releaseDate = dateFormat(show.premiered, "mmmm dS, yyyy");
  let scoreColor = "";
  const percentage = Math.floor(data?.score * 100);
  if (percentage >= 70) {
    scoreColor = "#007500";
  } else {
    scoreColor = "#D1D100";
  }
  return (
    <div className="">
      <div className="relative mb-[30px] rounded-[10px]">
        <img className="w-full rounded-[10px]" src={image.medium} alt="" />
        <div
          className="absolute bottom-0 rounded-full"
          style={{
            backgroundColor: "#474040",
            padding: "3px",
            transform: "translateX(15px) translateY(50%)",
          }}
        >
          <div
            className="circular-progress"
            style={{
              background: `conic-gradient(${scoreColor} ${
                (360 * percentage) / 100
              }deg, #bbbb 0deg)`,
            }}
          >
            <div className="percentage-value">
              <span className="fs-4">{percentage}</span>
              <span className="" style={{ fontSize: "8px" }}>
                %
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-[1.1em] font-semibold">{name}</h2>
        <div className="flex justify-between items-end gap-x-[10px]">
          <h4 className="text-slate-600 text-[1em] leading-[1.2rem]">
            {releaseDate}
          </h4>
          <Link
            to={`/movie/${show.id}`}
            className="bg-transparent text-[rgba(3,37,65)] font-semibold  py-2 px-4 border-2 border-[rgba(3,37,65)] hover:bg-[rgba(3,37,65)] hover:text-white rounded transition-all ease-in"
          >
            Summary
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
