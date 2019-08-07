import classnames from "classnames";
import { History, Location } from "history";
import React, { Component, createRef, RefObject } from "react";
import { connect } from "react-redux";
import { match, withRouter } from "react-router";

import { recognizePicture } from "../actions";
import Button from "../components/Button";
import IconButton from "../components/IconButton";

import styles from "./PictureTaker.module.css";

interface IPictureTakerState {
  isFocus: boolean;
}

interface IPictureTakerProps {
  className?: string;
  recognizePicture: (...arg: any) => any;
  showIcon?: boolean;

  // withRouter props
  history: History;
  location: Location;
  match: match;
}

const CameraIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <path
        d="M50 40c-8.285 0-15 6.718-15 15 0 8.285 6.715 15 15 15 8.283 0 15-6.715 15-15 0-8.282-6.717-15-15-15zm40-15H78c-1.65 0-3.428-1.28-3.949-2.846l-3.102-9.309C70.426 11.28 68.65 10 67 10H33c-1.65 0-3.428 1.28-3.949 2.846l-3.102 9.309C25.426 23.72 23.65 25 22 25H10C4.5 25 0 29.5 0 35v45c0 5.5 4.5 10 10 10h80c5.5 0 10-4.5 10-10V35c0-5.5-4.5-10-10-10zM50 80c-13.807 0-25-11.193-25-25 0-13.806 11.193-25 25-25 13.805 0 25 11.194 25 25 0 13.807-11.195 25-25 25zm36.5-38.007c-1.932 0-3.5-1.566-3.5-3.5 0-1.932 1.568-3.5 3.5-3.5 1.934 0 3.5 1.568 3.5 3.5 0 1.934-1.567 3.5-3.5 3.5z"
        fill="currentColor"
      />
    </svg>
  );
};

class PictureTaker extends Component<IPictureTakerProps, IPictureTakerState> {
  private label: RefObject<HTMLLabelElement>;

  constructor(props: IPictureTakerProps) {
    super(props);

    this.state = {
      isFocus: false
    };

    this.label = createRef();
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  public render() {
    const { showIcon, children } = this.props;

    return (
      <>
        <input
          type="file"
          capture="environment"
          accept="image/*"
          id="pictureTaker"
          className={classnames(styles.inputEle, {
            [styles["inputEle--isFocus"]]: this.state.isFocus
          })}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          data-testid="picture-taker-input"
        />
        <label
          htmlFor="pictureTaker"
          data-testid="picture-taker"
          className={classnames(styles.label, this.props.className)}
          ref={this.label}
        >
          {showIcon ? (
            // tabIndex is set to -1 to make the button unfocusable
            <IconButton tabIndex={-1} onClick={this.handleButtonClick}>
              <CameraIcon />
            </IconButton>
          ) : (
            // tabIndex is set to -1 to make the button unfocusable
            <Button
              className={styles.button}
              tabIndex={-1}
              onClick={this.handleButtonClick}
              data-testid="picture-taker-button"
            >
              {children}
            </Button>
          )}
        </label>
      </>
    );
  }

  private handleButtonClick() {
    this.label.current && this.label.current.click();
  }

  // Needed because of Firefox bug (https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/#firefox-bug)
  private onFocus = () => {
    this.setState({ isFocus: true });
  };

  private onBlur = () => {
    this.setState({ isFocus: false });
  };

  private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        this.props.recognizePicture(file, this.props.history);
      }
    }
  };
}

const mapDispatchToProps = { recognizePicture };

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(PictureTaker)
);
