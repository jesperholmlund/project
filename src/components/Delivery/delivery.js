import React from "react";
import "./delivery.css";
import { useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";

const Delivery = () => {
  const navigate = useNavigate();
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
      <div className="delivery">
        <div className="card">
          <div className="card-header">
            <p className="h3">Inkorg</p>
          </div>
          <div className="card-body">
            <ul>
              <li className="card bg-gray ">
                <div className="card-body">
                  Det finns en i kasse att hämta upp på ICA
                </div>
                <div className=" card-footer">
                  <span className="badge" data-badge="Nyhet"></span>
                </div>
              </li>
              <li className="card bg-gray">
                <p className="card-body">
                  Det finns en i kasse att hämta upp på ICA
                </p>
              </li>
            </ul>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
