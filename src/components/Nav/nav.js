import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { IoList } from "react-icons/io5";
import { IoStorefront } from "react-icons/io5";
import "./nav.css";

const Nav = () => {
  const [menu, showMenu] = useState(false);
  const toggleMenu = () => {
    showMenu(!menu);
  };

  return (
    <>
      {" "}
      <header>
        <p style={{ color: "#fff" }} class="h2">
          Svinneriet
        </p>
        <i
          onClick={toggleMenu}
          id="menu"
          style={{ color: "#fff", fontSize: "45px" }}
          class="icon icon-2x icon-menu"
        >
          {" "}
          <FiMenu></FiMenu>
        </i>
      </header>
      <nav id="navigation">
        <ul class={"menu bg-dark" + (menu ? " show" : " hide")}>
          <li class="menu-item">
            <CgProfile style={{ fontSize: "45px" }}></CgProfile>
            Välkommen !
          </li>
          <div class="divider"></div>
          <NavLink
            exact
            to={"/index"}
            className={({ isActive }) =>
              "card text-light " +
              (isActive ? " bg-success text-light" : " bg-dark")
            }
            style={{ width: "100%", border: "none" }}
          >
            {" "}
            <li className="menu-item" onClick={toggleMenu}>
              <IoMdHome></IoMdHome> <a>Hem</a>
            </li>{" "}
          </NavLink>
          <NavLink
            to={"/stores"}
            className={({ isActive }) =>
              "card text-light " +
              (isActive ? " bg-success text-light" : " bg-dark")
            }
            style={{ width: "100%", border: "none" }}
          >
            <li className="menu-item " onClick={toggleMenu}>
              <IoStorefront></IoStorefront>
              <a>Butiker</a>
            </li>
          </NavLink>
          <NavLink
            to={"/subscriptions"}
            className={({ isActive }) =>
              "card text-light " +
              (isActive ? " bg-success text-light" : " bg-dark")
            }
            style={{ width: "100%", border: "none" }}
          >
            <li class="menu-item" onClick={toggleMenu}>
              <IoList></IoList> <a>Prenumerationer</a>
            </li>
          </NavLink>
          <NavLink
            to={"/settings"}
            className={({ isActive }) =>
              "card text-light " +
              (isActive ? " bg-success text-light" : " bg-dark")
            }
            style={{ width: "100%", border: "none" }}
          >
            <li class="menu-item" onClick={toggleMenu}>
              <IoMdSettings></IoMdSettings>
              <a>Inställningar</a>
            </li>
          </NavLink>
          <li class="menu-item">
            <TbTruckDelivery></TbTruckDelivery>
            <a>Upphämtning</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
