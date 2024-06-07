import React from "react";
import "./Modal.css";
import naver from "./img/naver.png";
import google from "./img/google.png";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}></span>
        <div className="modal-body">
          <a href=" http://localhost:8080/oauth2/authorization/google">
            <img
              src={google}
              alt="google"
              style={{
                height: "55px",
                width: "300px",
                marginTop: "460px",
              }}
            />
          </a>
          <a href=" http://localhost:8080/oauth2/authorization/naver">
            <img
              src={naver}
              alt="naver"
              style={{
                height: "65px",
                width: "300px",
                marginTop: "5px",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
