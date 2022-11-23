import React, { useEffect, useState } from "react";
import Store from "./store";
import "./stores.css";
import { TbArrowBackUp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Stores = () => {
  const navigate = useNavigate();
  const [storeList, setStoreList] = useState([
    { name: "willys" },
    { name: "ica" },
    { name: "hemköp" },
    { name: "lidl" },
    { name: "test" },
  ]);
  const [subList, setSubList] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const stores = [
      { name: "willys" },
      { name: "ica" },
      { name: "hemköp" },
      { name: "lidl" },
      { name: "test" },
    ];
    axios({
      url: "http://localhost:1337/api",
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then((res) => {
      setSubList(res.data);
      if (!res.data) {
        setStoreList(stores);
      } else {
        res.data.map((sub) => {
          const found = stores.findIndex((store) => store.name === sub.name);
          stores.splice(found, 1);
          setStoreList(stores);
        });
      }
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
          style={{ textAlign: "left", width: "fit-content" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          <TbArrowBackUp></TbArrowBackUp>
          Tillbaka
        </a>
        <input class="form-input" type="text" placeholder="Sök" />
      </div>
      <div className="container">
        <div className="columns">
          {storeList.map((store, i) => (
            <Store
              updating={isLoading}
              key={store.name}
              sub={false}
              name={store.name}
            ></Store>
          ))}
          {subList.map((sub, i) => (
            <Store
              updating={isLoading}
              key={sub.name}
              sub={true}
              id={sub._id}
              name={sub.name}
            ></Store>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stores;
