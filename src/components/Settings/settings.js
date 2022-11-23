import React, { useEffect, useState } from "react";
import "./settings.css";
import axios from "axios";
import { TbArrowBackUp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { FaRegCreditCard } from "react-icons/fa";
import { FaCity } from "react-icons/fa";

const Settings = () => {
  const [card, setCard] = useState(false);
  const [adress, setAdress] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [modal, showModal] = useState(false);
  const navigate = useNavigate();

  const editCard = () => {
    setCard(!card);
  };

  const editAdress = () => {
    setAdress(!adress);
  };

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:1337/users",
    }).then((res) => {
      setUserInfo({
        cardOwner: res.data[0].cardOwner,
        cardNumber: res.data[0].cardNumber,
        cardExpiricy: res.data[0].cardExpiricy,
        cardCvs: res.data[0].cardCvs,
        userName: res.data[0].userName,
        userCity: res.data[0].userCity,
        userStreet: res.data[0].userStreet,
        userFloor: res.data[0].userFloor,
        userDoor: res.data[0].userDoor,
      });
    });
  }, [modal]);

  const updateSettings = () => {
    axios({
      method: "put",
      url: "http://localhost:1337/users/add",
      data: {
        cardOwner: userInfo.cardOwner,
        cardNumber: userInfo.cardNumber,
        cardExpiricy: userInfo.cardExpiricy,
        cardCvs: userInfo.cardCvs,
        userName: userInfo.userName,
        userCity: userInfo.userCity,
        userStreet: userInfo.userStreet,
        userFloor: userInfo.userFloor,
        userDoor: userInfo.userDoor,
      },
    });
    showModal(!modal);
  };
  return (
    <>
      <div class="top">
        <a
          className="text-green"
          style={{ textAlign: "left" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          <TbArrowBackUp></TbArrowBackUp>
          Tillbaka
        </a>
      </div>
      <div id="settings">
        <div className="columns">
          <div className="column payment-method col-sm-12">
            <div style={{ width: "100%" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>
                  <FaRegCreditCard></FaRegCreditCard> Betalningsmetod{" "}
                </h4>
                <div>
                  {card ? (
                    <a onClick={editCard} className="text-warning">
                      Avbryt
                    </a>
                  ) : (
                    <a onClick={editCard} className="text-green">
                      Ändra
                    </a>
                  )}
                </div>
              </div>
              {card ? (
                <>
                  <div className="form-group">
                    <label className="form-label" htmlFor="cardOwner">
                      Namn på kortet
                    </label>
                    <input
                      name="cardOwner"
                      className="form-input"
                      defaultValue={userInfo.cardOwner}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="cardNumber">
                      Kortnummer
                    </label>
                    <input
                      type="number"
                      name="cardNumber"
                      className="form-input"
                      defaultValue={userInfo.cardNumber}
                      onChange={handleChange}
                    />
                  </div>{" "}
                  <div className="cardHori">
                    <div className="form-group" style={{ width: "100%" }}>
                      <label className="form-label" htmlFor="cardExpiricy">
                        Utgångsdatum
                      </label>
                      <input
                        type="number"
                        name="cardExpiricy"
                        className="form-input"
                        defaultValue={userInfo.cardExpiricy}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group" style={{ width: "100%" }}>
                      <label className="form-label" htmlFor="cardCvs">
                        CVS
                      </label>
                      <input
                        maxLength={4}
                        type="number"
                        name="cardCvs"
                        className="form-input"
                        defaultValue={userInfo.cardCvs}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <p style={{ marginTop: "13px" }} className="">
                  **** **** **** 4747
                </p>
              )}
            </div>
          </div>
          <div className="column adress col-sm-12">
            <div style={{ width: "100%" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>
                  <FaCity></FaCity> Adress
                </h4>
                <div>
                  {adress ? (
                    <a onClick={editAdress} className="text-warning">
                      Avbryt
                    </a>
                  ) : (
                    <a onClick={editAdress} className="text-green">
                      Ändra
                    </a>
                  )}
                </div>
              </div>
              {adress ? (
                <>
                  {" "}
                  <div className="form-group">
                    <label className="form-label" htmlFor="UserName">
                      Namn:{" "}
                    </label>
                    <input
                      name="userName"
                      className="form-input"
                      defaultValue={userInfo.userName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="userCity">
                      Stad:{" "}
                    </label>
                    <input
                      name="userCity"
                      className="form-input"
                      defaultValue={userInfo.userCity}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="userStreet">
                      Gata:{" "}
                    </label>
                    <input
                      name="userStreet"
                      className="form-input"
                      defaultValue={userInfo.userStreet}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="userFloor">
                      Våning:{" "}
                    </label>
                    <input
                      name="userFloor"
                      className="form-input"
                      onChange={handleChange}
                      defaultValue={userInfo.userFloor}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="userDoor">
                      Dörr:{" "}
                    </label>
                    <input
                      name="userDoor"
                      className="form-input"
                      onChange={handleChange}
                      defaultValue={userInfo.userDoor}
                    />
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <p style={{ marginTop: "13px" }}>
                    <strong>Namn:</strong> {userInfo.userName}
                  </p>
                  <p>
                    <strong>Stad:</strong> {userInfo.userCity}
                  </p>
                  <p>
                    <strong>Gata:</strong> {userInfo.userStreet}
                  </p>
                  <p>
                    <strong>Våning:</strong> {userInfo.userFloor}
                  </p>
                  <p>
                    <strong>Dörr:</strong> {userInfo.userDoor}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        <p className="text-center" style={{ padding: "13px" }}>
          <a onClick={updateSettings} className="btn btn-success btn-lg">
            Spara
          </a>
        </p>
        <div
          class={"modal modal-sm " + (modal ? " active" : " ")}
          id="modal-id"
        >
          <div class="modal-header">
            <a href="#close" class="modal-overlay" aria-label="Close"></a>
          </div>

          <div className="modal-container">
            <div className="modal-body">
              <div class="content text-center">
                Dina Inställningar är uppdaterade
              </div>
            </div>
            <div class="modal-footer">
              <a
                onClick={() => {
                  showModal(!modal);
                  setAdress(false);
                  setCard(false);
                }}
              >
                Stäng fönster
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
