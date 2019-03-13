import classnames from "classnames";
import React from "react";

import styles from "./OCRProgress.module.css";

interface IOCRProgressProps {
  progress: {
    status: string;
    progress: number;
  };
}

const OCRProgress = (props: IOCRProgressProps) => {
  const {
    progress: { status, progress }
  } = props;

  return (
    <div className={styles.container}>
      <span className={styles.progress}>{`${Math.floor(
        progress * 100
      )}%`}</span>
      <span className={styles.status}>{status}</span>
      <div className={styles.background} aria-hidden="true">
        <div className={classnames(styles.circle, styles["circle--1"])} />
        <div className={classnames(styles.circle, styles["circle--2"])} />
        <div className={classnames(styles.circle, styles["circle--3"])} />
        <div className={classnames(styles.circle, styles["circle--4"])} />
      </div>
    </div>
  );
};

export default OCRProgress;
