import classnames from "classnames";
import React, { ReactNode } from "react";

import styles from "./Button.module.css";

export interface ButtonProps {
  onClick?: (...args: any) => any;
  className?: string;
  children: ReactNode;
  full?: boolean;
  disabled?: boolean;
  tabIndex?: number;
  "data-test-id"?: string;
}

function Button(props: ButtonProps) {
  const {
    className,
    full,
    disabled,
    onClick,
    tabIndex,
    children,
    ...rest
  } = props;

  return (
    <button
      className={classnames(className, {
        [styles.button]: !full,
        [styles["button--full"]]: full
      })}
      disabled={disabled}
      onClick={onClick}
      tabIndex={tabIndex}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
