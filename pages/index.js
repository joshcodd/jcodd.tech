import Head from "next/head";
import Title from "../components/Title.jsx";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
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
