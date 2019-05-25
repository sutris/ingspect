import React, { createRef, PureComponent } from "react";

import styles from "./Modal.module.css";

interface ModalProps {
  onDismissed: () => void;
}

class Modal extends PureComponent<ModalProps> {
  private modal = createRef<HTMLDivElement>();

  constructor(props: ModalProps) {
    super(props);

    this.onKeydown = this.onKeydown.bind(this);
    this.onMousedown = this.onMousedown.bind(this);
  }

  public componentDidMount() {
    document.addEventListener("keydown", this.onKeydown, false);
    document.addEventListener("mousedown", this.onMousedown, false);
  }

  public componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown, false);
    document.removeEventListener("mousedown", this.onMousedown, false);
  }

  public render() {
    const { children, onDismissed } = this.props;

    return (
      <div className={styles.backdrop} data-testid="modal">
        <div className={styles.modal} ref={this.modal}>
          <button className={styles.closeButton} onClick={onDismissed}>
            close
          </button>
          {children}
        </div>
      </div>
    );
  }

  private onKeydown(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.props.onDismissed();
    }
  }

  private onMousedown(event: MouseEvent) {
    if (
      this.modal &&
      this.modal.current &&
      !this.modal.current.contains(event.target as Node)
    ) {
      this.props.onDismissed();
    }
  }
}

export default Modal;
