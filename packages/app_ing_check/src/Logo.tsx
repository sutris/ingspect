import classNames from "classnames";
import React from "react";

import styles from "./Logo.module.css";

interface ILogoProps {
  inline?: boolean;
  small?: boolean;
  className?: string;
}

const Logo = (props: ILogoProps) => {
  return (
    <div
      className={classNames(styles.logo, props.className, {
        [styles["logo--inline"]]: props.inline,
        [styles["logo--small"]]: props.small
      })}
    />
  );
};

export default Logo;
