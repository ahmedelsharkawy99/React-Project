import React from "react";
import ReactDom from "react-dom";

import Modal from "./Modal";
import Backdrop from "./Backdrop";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onClick={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
