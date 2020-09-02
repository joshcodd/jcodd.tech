import React from "react";
import styles from "./GlitchText.module.css";

function GlitchText(props) {
  const text = props.text;
  return (
    <div className={`${styles.glitchContainer}`}>
      <span className={`${styles.colour} ${styles.pink}`}>{text}</span>
      <span className={`${styles.colour} ${styles.yellow}`}>{text}</span>
      <span className={`${styles.colour} ${styles.blue}`}>{text}</span>
    </div>
  );
}

export default GlitchText;
