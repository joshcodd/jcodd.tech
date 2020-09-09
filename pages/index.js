import Head from "next/head";
import Title from "../components/Title.jsx";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import styles from "../styles/index.module.css";
import styled from "styled-components";
import React, { useState } from "react";
import { Colours, ColoursContext } from "../components/ColoursContext";

export default function Home() {
  const [colours, setColours] = useState(Colours.light);

  const documentStyle = {
    backgroundColor: colours.background,
    color: colours.foreground,
  };

  return (
    <ColoursContext.Provider value={colours}>
      <div style={documentStyle}>
        <Head>
          <title> Josh </title>
          <link rel="icon" href="" />
        </Head>

        <div>
          <NavBar setColours={setColours} />
          <Sidebar />

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
        </div>
      </div>
    </ColoursContext.Provider>
  );
}
