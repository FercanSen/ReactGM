import FocusTrap from "focus-trap-react";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
// import ReactDOM from "react-dom";
import "./Dialog.scss";

const Modal = ({ title, children, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

const Dialog = ({ title, children, onClose }) => {
  useEffect(() => {
    const modalRoot = document.getElementById("modal-root");
    const modalElement = document.createElement("div");
    modalRoot.appendChild(modalElement);

    return () => {
      modalRoot.removeChild(modalElement);
    };
  }, []);

  return createPortal(
    <FocusTrap>
      <Modal title={title} onClose={onClose}>
        {children}
      </Modal>
    </FocusTrap>,
    document.getElementById("modal-root")
  );
};

export default Dialog;
