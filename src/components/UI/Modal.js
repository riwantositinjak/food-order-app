import ReactDOM from "react-dom";
import React, { Fragment } from "react";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideCart}/>;
};

const Overlay = (props) => {
  return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>;
};

const portalTag = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}/>, portalTag)}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portalTag)}
    </Fragment>
  );
};

export default Modal;
