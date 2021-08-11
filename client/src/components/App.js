import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import Landing from "./views/landingPage/Landing.js";
import Login from "./views/loginPage/Login.js";
import Register from "./views/registerPage/Register.js";
import Weather from "./Weather";
import MapContainer from "./views/kakaoMap/MapContainer";
import { ApplicationContextProvider } from "../contexts/application_context";
import Header from "./views/common/Header.js";
import Footer from "./views/common/Footer.js";
import SearchBox from "./SearchBox";

function App() {
  return (
    <div>
      <ApplicationContextProvider>
        <Header />
        <Route exact path="/" component={Auth(Landing, null)} />
        <Route exact path="/nabvar" component={Auth(Landing, null)} />
        <Route exact path="/login" component={Auth(Login, false)} />
        <Route exact path="/register" component={Auth(Register, false)} />
        <SearchBox />
        <Weather />
        <MapContainer />
        <Footer />
      </ApplicationContextProvider>
    </div>
  );
}

export default App;
