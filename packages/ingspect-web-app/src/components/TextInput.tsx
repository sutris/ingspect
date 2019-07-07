import classnames from "classnames";
import React, { ChangeEventHandler, KeyboardEventHandler } from "react";

import styles from "./TextInput.module.css";

interface TextInputProps {
  value?: string;
  className?: string;
  placeholder?: string;
  onKeyPress?: KeyboardEventHandler;
  onChange?: ChangeEventHandler;
  "data-testid"?: string;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const { className, ...rest } = props;

    return (
      <input
        className={classnames(styles.textInput, className)}
        type="text"
        ref={ref}
        {...rest}
      />
    );
  }
);

export default TextInput;
