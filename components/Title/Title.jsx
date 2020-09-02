import React from "react";
import styles from "./Title.module.css";
import GlitchText from "../GlitchText/GlitchText";

function Title() {
  return (
    <div className={styles.titleContainer}>
      <span className={styles.hiText}>Hi, I'm</span>
      <div className={styles.glitchName}>
        <GlitchText text="Josh" />
      </div>

      <div className={styles.imAText}>
        <span style={{ display: "block" }}>
          I'm a software engineer based in Swansea, Wales.
        </span>
        <span style={{ display: "block" }}>
          Focused on writing efficient, clean and readable code.
        </span>
        <a className={styles.email}>jjc21@live.co.uk</a>
      </div>

      {/* <div className={styles.glitchOther}>
        <GlitchText text="Full-Stack " />
      </div> */}
    </div>
  );
}

export default Title;
