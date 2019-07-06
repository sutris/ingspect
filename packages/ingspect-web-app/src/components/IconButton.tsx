import classnames from "classnames";
import React from "react";

import Button, { ButtonProps } from "./Button";

import styles from "./IconButton.module.css";

function IconButton(props: ButtonProps) {
  const { className, children, ...rest } = props;

  return (
    <Button className={classnames(styles.iconButton, className)} {...rest}>
      {children}
    </Button>
  );
}

export default IconButton;
