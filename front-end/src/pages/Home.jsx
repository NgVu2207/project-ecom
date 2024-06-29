import React from "react";
import Hero from "../modules/Home/components/Hero/Hero";
import Popular from "../modules/Home/components/Popular/Popular";
import Offer from "../modules/Home/components/Offer";
import NewColections from "../modules/Home/components/NewCollections/NewColections";
import NewsLetter from "../modules/Home/components/NewsLetter/NewLetter";

const Home = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offer />
      <NewColections />
      <NewsLetter />
    </>
  );
};

export default Home;
