import React, { useState } from "react";
import axios from "axios";

const Store = (props) => {
  const [modal, showModal] = useState(false);
  let sub = props.sub;
  const unsubscribe = () => {
    showModal(!modal);
  };
  const addSubscriptions = () => {
    axios({
      method: "POST",
      url: "http://localhost:1337/api/post/",
      data: {
        name: props.name,
      },
    }).then(showModal(!modal), props.updating());
  };
  const endSubscription = () => {
    axios({
      method: "delete",
      url: "http://localhost:1337/api/delete/" + props.id,
    }).then(showModal(!modal), props.updating());
  };
  return (
    <div className="column col-sm-12 col-lg- col-xl-6">
      <div className={"card text-dark " + (sub ? "opacity" : "")}>
        <div className="card-header h4">{props.name}</div>
        <div className="card-image">
          <img src="/ica.png" className="iamge-responsive"></img>
        </div>
        <div className="card-footer">
          <a
            onClick={unsubscribe}
            style={{ fontWeight: "600" }}
            className={" " + (sub ? " text-gray" : " text-green")}
          >
            {sub ? "Unsubscribe" : "Subscribe"}
          </a>
        </div>
      </div>
      <div class={"modal modal-sm " + (modal ? " active" : " ")} id="modal-id">
        <div class="modal-header">
          <a href="#close" class="modal-overlay" aria-label="Close"></a>
        </div>

        <div className="modal-container">
          <div className="modal-body">
            <div class="content">
              {sub ? (
                <div id="confirmBox">
                  <p class="h4 text-center text-dark">
                    Är du säker på att du vill avsluta prenumerationen på{" "}
                    {props.name}?
                  </p>
                  <p class="text-center text-dark"></p>
                </div>
              ) : (
                <div id="confirmBox">
                  <p class=" text-center text-dark">
                    Prenumererar du på <strong>{props.name}</strong> genom oss
                    så får du förtur på alla svinnvaror, notiser om varor med
                    kort datum, och bidrar till ett mer hållbart samhälle med
                    mindre slöseri.
                  </p>
                  <p class="text-center text-dark">
                    <u>99kr/månaden</u>
                  </p>
                </div>
              )}
            </div>
          </div>
          <div class="modal-footer">
            {sub ? (
              <a onClick={endSubscription} class="h4 text-gray">
                Ja
              </a>
            ) : (
              <a onClick={addSubscriptions} class="h4">
                Ja
              </a>
            )}
            {sub ? (
              <a onClick={unsubscribe} id="btn-close" class="h4">
                Avbryt
              </a>
            ) : (
              <a onClick={unsubscribe} id="btn-close" class="h4 text-gray">
                Avbryt
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
