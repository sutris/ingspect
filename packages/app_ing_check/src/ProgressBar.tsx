import React from "react";

import styles from "./ProgressBar.module.css";
import progress from "./reducers/loading";

interface IProgresBarProps {
  progress: {
    status: string;
    progress: number;
  };
}

const ProgressBar = (props: IProgresBarProps) => {
  return (
    <div className={styles.container}>
      {props.progress.status}
      <div
        style={{ transform: `scaleX(${props.progress.progress})` }}
        className={styles.bar}
      />
    </div>
  );
};

export default ProgressBar;
