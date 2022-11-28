import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Stores from "./components/Stores/stores";
import "spectre.css";
import { Routes, Route } from "react-router-dom";
import Delivery from "./components/Delivery/delivery";
import Index from "./components/Index/index";
import Nav from "./components/Nav/nav";
import Settings from "./components/Settings/settings";
import SubscriptionList from "./components/SubscriptionList/subscriptionList";
import "./components/responsive.css";

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:1337/users",
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Nav user={user}></Nav>
      <Routes>
        <Route exact path="/index" element={<Index></Index>}></Route>
        <Route path="/stores" element={<Stores></Stores>}></Route>
        <Route
          path="/settings"
          element={<Settings user={user}></Settings>}
        ></Route>
        <Route
          path="/subscriptions"
          element={<SubscriptionList></SubscriptionList>}
        ></Route>
        <Route path="/delivery" element={<Delivery></Delivery>}></Route>
      </Routes>
    </div>
  );
}

export default App;
