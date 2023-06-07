import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Summary = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        const queryData = data.find((item) => item.show.id == id);
        setData(queryData);
      });
  }, []);
  let percentage = 0;
  percentage = Math.floor(data?.score * 100);
  return (
    <div className="my-[50px]">
      <div className="relative bg-slate-100 px-[50px] py-[30px]">
        <div className="flex items-center gap-x-[40px]">
          <div className="max-w-[25vw]">
            <img
              className="rounded-[10px]"
              src={data?.show?.image?.original}
              alt=""
            />
          </div>
          <div className="w-full">
            <h2 className="text-3xl font-bold">
              {data?.show?.name} <span className=" font-normal">(2023)</span>
            </h2>
            <div className="flex">
              <h5>{data?.show?.premiered}</h5>
              <ul className="relative flex disc-bullet">
                {data?.show?.genres.map((genre, indx) => (
                  <li className="" key={indx}>
                    {indx !== 0 && <span>, </span>}
                    {genre}
                  </li>
                ))}
              </ul>
              <h5 className="relative disc-bullet">1h 32m</h5>
            </div>
            <div className="flex items-center mt-[20px]">
              <div
                className="circular-progress"
                style={{
                  background: `conic-gradient(green ${
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
              <p className="px-[10px] text-lg leading-[20px] font-bold">
                User <br /> Score
              </p>
              <button className="mx-[20px] px-[10px] py-[5px] bg-slate-800 text-white">
                Book Ticket
              </button>
            </div>
            <div>
              <h4>Summary</h4>
              <p>{data?.show?.summary}</p>
            </div>
            <div className="grid grid-cols-4 mt-[20px]">
              <div>
                <h2 className="font-bold">Status</h2>
                <p>{data?.show?.status}</p>
              </div>
              <div>
                <h2 className="font-bold">Original Language</h2>
                <p>{data?.show?.language}</p>
              </div>
              <div>
                <h2 className="font-bold">Type</h2>
                <p>{data?.show?.type}</p>
              </div>
              <div>
                <h2 className="font-bold">External Links</h2>
                <ul className="flex gap-[10px]">
                  <li>
                    <a
                      className="border-[2px] px-2"
                      href={`https://www.imdb.com/title/${data?.show?.externals?.imdb}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      IMDb
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
