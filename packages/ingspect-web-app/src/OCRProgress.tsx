import React from "react";

import styles from "./OCRProgress.module.css";

interface IOCRProgressProps {
  progress: {
    status: string;
    progress: number;
  };
}

const OCRProgress = (props: IOCRProgressProps) => {
  return (
    <div className={styles.container}>
      <span>{props.progress.status}</span>
      <div className={styles.barContainer}>
        <div
          style={{ transform: `scaleX(${props.progress.progress})` }}
          className={styles.bar}
        />
      </div>
    </div>
  );
};

export default OCRProgress;
