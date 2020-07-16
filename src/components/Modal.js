import React from "react";
import "../styles/Modal.scss";

function Modal(props) {
  const toggleModal = props.toggleModal;
  return (
    <div class="modal">
      <div class="content">
        <span onClick={toggleModal}>&times;</span>
        <article> {props.children}</article>
      </div>
    </div>
  );
}

export default Modal;
