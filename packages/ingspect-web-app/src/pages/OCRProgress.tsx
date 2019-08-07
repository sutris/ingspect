import classnames from "classnames";
import React from "react";
import { connect } from "react-redux";

import { resetProgress } from "../actions/loading";
import ocrManager from "../controlers/ocr";
import styles from "./OCRProgress.module.css";

interface IOCRProgressProps {
  progress: {
    status: string;
    progress: number;
  };

  // Redux props
  resetProgress: (...arg: any) => any;
}

const OCRProgress = (props: IOCRProgressProps) => {
  const {
    progress: { status, progress },
    resetProgress: resetOCRProgress
  } = props;

  function handleCancel() {
    ocrManager.cancelCurrentJob();
    resetOCRProgress();
  }

  return (
    <div className={styles.container}>
      <span className={styles.progress}>{`${Math.floor(
        progress * 100
      )}%`}</span>
      <span className={styles.status}>{status}</span>
      <span className={styles.cancelButton} onClick={handleCancel}>
        Cancel
      </span>
      <div className={styles.background} aria-hidden="true">
        <div className={classnames(styles.circle, styles["circle--1"])} />
        <div className={classnames(styles.circle, styles["circle--2"])} />
        <div className={classnames(styles.circle, styles["circle--3"])} />
        <div className={classnames(styles.circle, styles["circle--4"])} />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  resetProgress
};

export default connect(
  null,
  mapDispatchToProps
)(OCRProgress);
