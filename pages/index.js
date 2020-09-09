import Head from "next/head";
import Title from "../components/Title.jsx";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import styles from "../styles/index.module.css";
import React, { useState, useEffect, useReducer } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [textColour, setTextColor] = useState("#242424");
  const [backgroundColour, setBackgroundColour] = useState("#FFFFFF");

  useEffect(() => {
    const textColourValue = darkMode ? "#FFFFFF" : "#242424";
    const backgroundColourValue = darkMode ? "#131417" : "#FFFFFF";
    setTextColor(textColourValue);
    setBackgroundColour(backgroundColourValue);
  }, [darkMode]);

  return (
    <div style={{ backgroundColor: backgroundColour }}>
      <Head>
        <title> Josh </title>
        <link rel="icon" href="" />
      </Head>

      <div>
        <NavBar
          textColour={textColour}
          backgroundColour={backgroundColour}
          setDarkMode={setDarkMode}
        />
        <Sidebar textColour={textColour} backgroundColour={backgroundColour} />

        <section className={styles.home} id="home">
          <Title
            darkMode={darkMode}
            textColour={textColour}
            backgroundColour={backgroundColour}
          />
        </section>

        <section className={styles.about} id="about">
          <About textColour={textColour} backgroundColour={backgroundColour} />
        </section>

        <section className={styles.projects} id="projects">
          <Projects
            textColour={textColour}
            backgroundColour={backgroundColour}
          />
        </section>
        <Footer />
      </div>
    </div>
  );
}
