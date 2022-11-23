import React from "react";
import { MdAddCircle } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import axios from "axios";
import { useState, useEffect } from "react";
import Subscribe from "./subscribe";
import "./subList.css";

const SubscriptionList = () => {
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:1337/api",
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then((res) => {
      setSubscriptions(res.data);
    });
  }, [load]);
  const isLoading = () => {
    setLoad(!load);
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
      <div className="subList">
        {subscriptions.map((sub) => (
          <Subscribe
            key={sub._id}
            id={sub._id}
            sub={true}
            name={sub.name}
            loading={isLoading}
          ></Subscribe>
        ))}
        <p className="text-center">
          <NavLink className="text-green h1" to={"/stores"}>
            <MdAddCircle></MdAddCircle>
          </NavLink>
        </p>
      </div>
    </>
  );
};

export default SubscriptionList;
