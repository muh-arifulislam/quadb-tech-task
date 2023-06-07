import React, { useEffect, useState } from "react";
import Card from "../../components/Card";

const Home = () => {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);
  return (
    <section className="container mx-auto my-[50px]">
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-[30px] lg:mx-0 mx-[20px]">
        {shows.map((data) => (
          <Card data={data} key={data.show.id}></Card>
        ))}
      </div>
    </section>
  );
};

export default Home;
