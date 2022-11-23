import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
import { useState } from "react";

const Subscribe = (props) => {
  const [modal, showModal] = useState(false);
  const deleteSubscription = () => {
    axios({
      method: "delete",
      url: "http://localhost:1337/api/delete/" + props.id,
    }).then(props.loading(), toggleModal());
  };

  const toggleModal = () => {
    showModal(!modal);
  };
  return (
    <>
      <div className="tile tile-centered text-dark">
        <figure className="avatar avatar-xl">
          <img src="/ica.png" className=""></img>
          <div
            className="avatar-icon"
            style={{
              backgroundColor: "unset",
            }}
          >
            <AiOutlineCloseCircle
              style={{ fontSize: "23px", backgroundColor: "#ffffff" }}
              className="text-gray"
              onClick={toggleModal}
            ></AiOutlineCloseCircle>
          </div>
        </figure>

        <div className="tile-content">
          <p className="tile-title h4">{props.name}</p>
          <p className="tile-subtitle text-muted">99kr/månaden</p>
        </div>
      </div>
      <div class={"modal modal-sm " + (modal ? " active" : " ")} id="modal-id">
        <div class="modal-header">
          <a href="#close" class="modal-overlay" aria-label="Close"></a>
        </div>

        <div className="modal-container">
          <div className="modal-body">
            <div class="content">
              Är du verkligen säkert att du vill sluta prenumera på {props.name}
              ? Vi kommer att sakna dig :(
            </div>
          </div>
          <div class="modal-footer">
            <a className=" h4 text-gray" onClick={deleteSubscription}>
              Avsluta
            </a>
            <a className="h4" onClick={toggleModal}>
              Avbryt
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Subscribe;
