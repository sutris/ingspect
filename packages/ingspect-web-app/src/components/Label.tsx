// used in search result page: ingredient name + category (in modal)
import classnames from "classnames";
import React, { MouseEventHandler } from "react";

import styles from "./Label.module.css";

interface LabelProps {
  children: string;
  onClick?: MouseEventHandler;
}

function Label(props: LabelProps) {
  const { children, onClick } = props;
  const extraProps: { role?: string } = {};

  if (onClick) {
    extraProps.role = "button";
  }

  return (
    <span
      className={classnames(styles.label)}
      onClick={onClick}
      {...extraProps}
    >
      {children}
    </span>
  );
}

export default Label;
