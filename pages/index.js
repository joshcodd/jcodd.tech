import Head from "next/head";
import Title from "../components/Title/Title.jsx";
import Sidebar from "../components/Sidebar/Sidebar";
import NavBar from "../components/NavBar/NavBar";
import React from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Josh </title>
        <link rel="icon" href="" />
      </Head>

      <div>
        <NavBar />
        <Sidebar />
        <Title />
      </div>
    </div>
  );
}
