import React from "react";

import styles from "./ProgressBar.module.css";

interface IProgresBarProps {
  progress: number;
}

const ProgressBar = (props: IProgresBarProps) => {
  return (
    <div className={styles.container}>
      <div
        style={{ transform: `scaleX(${props.progress})` }}
        className={styles.bar}
      />
    </div>
  );
};

export default ProgressBar;
