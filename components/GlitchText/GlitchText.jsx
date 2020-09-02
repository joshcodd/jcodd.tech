import React from "react";
import styles from "./GlitchText.module.css";

function GlitchText() {
  return (
    <div className={`${styles.glitchContainer}`}>
      <span className={`${styles.colour} ${styles.pink}`}>Josh</span>
      <span className={`${styles.colour} ${styles.yellow}`}>Josh</span>
      <span className={`${styles.colour} ${styles.blue}`}>Josh</span>
    </div>
  );
}

export default GlitchText;
