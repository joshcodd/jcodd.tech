import React from "react";
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

      <section id="home">
        <Title />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>
      <Footer />
    </Layout>
  );
}
