import React from "react";
import styles from "../styles/index.module.css";
import Head from "next/head";
import Title from "../components/Title.jsx";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title> Josh </title>
        <link rel="icon" href="" />
      </Head>

      <section className={styles.home} id="home">
        <Title />
      </section>

      <section className={styles.about} id="about">
        <About />
      </section>

      <section className={styles.projects} id="projects">
        <Projects />
      </section>
      <Footer />
    </Layout>
  );
}
