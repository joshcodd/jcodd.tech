import Head from "next/head";
import Title from "../components/Title.jsx";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
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
        <NavBar />
        <Sidebar />

        <section className={styles.home}>
          <Title />
        </section>

        <section className={styles.about}>
          <About />
        </section>

        <section className={styles.projects}>
          <Projects />
        </section>
        <Footer />
      </div>
    </div>
  );
}
