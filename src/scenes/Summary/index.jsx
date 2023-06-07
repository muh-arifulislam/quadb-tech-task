import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dateFormat, { masks } from "dateformat";
import SummaryLoader from "../../components/SummaryLoader";
import ModalForm from "../../components/ModalForm";
const Summary = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({});
  const [overview, setOverview] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  useEffect(() => {
    setLoading(true);
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          const queryData = data.find((item) => item.show.id == id);
          setData(queryData);
          setOverview(queryData.show.summary);
          setReleaseDate(dateFormat(data?.show?.premiered, "mmmm dS, yyyy"));
          setLoading(false);
        }, [1000]);
      });
  }, []);
  let percentage = 0;
  percentage = Math.floor(data?.score * 100);
  if (loading) {
    return <SummaryLoader></SummaryLoader>;
  }
  return (
    <div className="bg-slate-100 ">
      <div className="relative py-[60px] lg:px-[50px] px-[20px] ">
        <div className="flex lg:flex-row md:flex-row flex-col items-center gap-[40px]">
          {/* summary image*/}
          <div className="lg:max-w-[25vw] md:max-w-[30vw] max-w-[100vw]">
            <img
              className="rounded-[10px]"
              src={data?.show?.image?.original}
              alt=""
            />
          </div>
          {/* summary description  */}
          <div className="w-full">
            <h2 className="text-3xl font-bold">
              {data?.show?.name} <span className=" font-normal">(2023)</span>
            </h2>
            <div className="flex">
              <h5>{releaseDate}</h5>
              <ul className="relative flex disc-bullet">
                {data?.show?.genres.map((genre, indx) => (
                  <li className="" key={indx}>
                    {indx !== 0 && <span>, </span>}
                    {genre}
                  </li>
                ))}
              </ul>
              <h5 className="relative disc-bullet">{data?.show?.runtime}m</h5>
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col lg:items-center gap-[20px] mt-[20px]">
              <div className="flex">
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
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-[45px] h-[45px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <p>
                    <span>
                      <span className="text-lg font-bold">
                        {data?.show?.rating?.average
                          ? data?.show?.rating?.average
                          : "N/A"}
                      </span>
                      /10
                    </span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpenModal(!openModal)}
                class="bg-amber-400 font-bold py-2 px-5 rounded"
              >
                Book tickets
              </button>
            </div>
            <div className="mt-[20px]">
              <h4 className="text-xl font-bold mb-[10px]">Overview</h4>
              <div dangerouslySetInnerHTML={{ __html: overview }}></div>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 mt-[20px]">
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
      {/*form modal  */}
      <ModalForm
        data={data}
        openModal={openModal}
        setOpenModal={setOpenModal}
      ></ModalForm>
    </div>
  );
};

export default Summary;
