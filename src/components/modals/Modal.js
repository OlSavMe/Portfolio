import React from "react";
import "../../styles/componentStyles/Modal.scss";

function Modal(props) {
  const toggleModal = props.toggleModal;
  return (
    <div className="modal">
      <div className="content">
        <span onMouseDown={toggleModal}>&times;</span>
        <article> {props.children}</article>
      </div>
    </div>
  );
}

export default Modal;
