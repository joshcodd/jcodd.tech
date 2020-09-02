import Head from "next/head";
import GlitchText from "../components/GlitchText/GlitchText";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Josh </title>
        <link rel="icon" href="" />
      </Head>

      <div>
        <Sidebar />
        <GlitchText />
      </div>
    </div>
  );
}
