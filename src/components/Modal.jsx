import React from "react";
import "./FormStyles.css";

function Modal({ isVisible, errorMessage = null }) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          <h1 style={{ color: errorMessage ? "red" : "green" }}>
            {errorMessage != null
              ? errorMessage
              : "The Form Has Been Submited Successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Modal;
