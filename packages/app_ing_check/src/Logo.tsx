import React from "react";
import classNames from "classnames";

import "./Logo.css";

interface ILogoProps {
  inline?: boolean;
  small?: boolean;
}

const Logo = (props: ILogoProps) => {
  return (
    <div
      className={classNames("logo", {
        "logo--inline": props.inline,
        "logo--small": props.small
      })}
    />
  );
};

export default Logo;
