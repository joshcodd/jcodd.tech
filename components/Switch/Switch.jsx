import React, { useState } from "react";
import styles from "./Switch.module.css";

function Switch() {
  const [switchValue, setSwitchValue] = useState("light");

  function handleClick() {
    const value = switchValue === "light" ? "dark" : "light";
    setSwitchValue(value);
  }

  return (
    <div className={styles.switch} onClick={handleClick}>
      <div
        className={styles.ball}
        style={
          switchValue === "light"
            ? { marginLeft: "24px" }
            : { marginLeft: "0px" }
        }
      ></div>
    </div>
  );
}

export default Switch;
