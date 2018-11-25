import React from "react";
import classNames from "classnames";

import styles from "./Logo.module.css";

interface ILogoProps {
  inline?: boolean;
  small?: boolean;
}

const Logo = (props: ILogoProps) => {
  return (
    <div
      className={classNames(styles.logo, {
        [styles["logo--inline"]]: props.inline,
        [styles["logo--small"]]: props.small
      })}
    />
  );
};

export default Logo;
