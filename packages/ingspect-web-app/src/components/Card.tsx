import classnames from "classnames";
import React, { ReactNode } from "react";

import styles from "./Card.module.css";

interface CardProps {
  className: string;
  children: ReactNode;
}

function Card(props: CardProps) {
  const { className, children } = props;

  return <div className={classnames(styles.card, className)}>{children}</div>;
}

export default Card;
