import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import CardLoader from "../../components/CardLoader";

const Home = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) =>
        setTimeout(() => {
          setShows(data);
          setLoading(false);
        }, 1000)
      );
  }, []);
  if (loading) {
    return (
      <div className="container mx-auto my-[50px]">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-x-[30px] gap-y-[40px] lg:mx-0 mx-[20px]">
          <CardLoader></CardLoader>
          <CardLoader></CardLoader>
          <CardLoader></CardLoader>
          <CardLoader></CardLoader>
          <CardLoader></CardLoader>
        </div>
      </div>
    );
  }
  return (
    <section className="container mx-auto my-[50px]">
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-x-[30px] gap-y-[40px] lg:mx-0 mx-[20px]">
        {shows.map((data) => (
          <Card data={data} key={data.show.id}></Card>
        ))}
      </div>
    </section>
  );
};

export default Home;
