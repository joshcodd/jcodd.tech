import Head from "next/head";
import Title from "../components/Title.jsx";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { useState } from "react";

export default function Home() {
  const [showContact, setShowContact] = useState(false);
  return (
    <Layout
      animate={true}
      showContact={showContact}
      setShowContact={setShowContact}
    >
      <Head>
        <title> Josh </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="home">
        <Title showContact={showContact} setShowContact={setShowContact} />
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
