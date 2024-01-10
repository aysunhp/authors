"use client";
import Navbar from "@/app/components/Navbar";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Navbar />
      <main className="home-page">
        <div className="containerr">
          <h1>This is Home Page</h1>
        </div>
      </main>
    </>
  );
};

export default Home;
