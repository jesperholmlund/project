import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import { GiRecycle } from "react-icons/gi";

const Index = () => {
  return (
    <div className="index">
      <div className="icons">
        {" "}
        <GiRecycle></GiRecycle>
        <GiRecycle></GiRecycle>
        <GiRecycle></GiRecycle>
      </div>

      <main>
        <h1>Vinn med svinn</h1>
        <p>
          Rädda klimatet, spara pengar, och få en utsökt måltid på en och samma
          gång!
        </p>
        <NavLink to="/stores">
          <a className="btn btn-success btn-lg" href="">
            Kom igång!
          </a>
        </NavLink>
      </main>
    </div>
  );
};

export default Index;
