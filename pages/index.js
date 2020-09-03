import Head from "next/head";
import Title from "../components/Title/Title.jsx";
import Sidebar from "../components/Sidebar/Sidebar";
import NavBar from "../components/NavBar/NavBar";
import styles from "../styles/index.module.css";
import React from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Josh </title>
        <link rel="icon" href="" />
      </Head>

      <div>
        <section className={styles.home}>
          <NavBar />
          <Sidebar />
          <Title />
        </section>

        <section className={styles.about}></section>
      </div>
    </div>
  );
}
