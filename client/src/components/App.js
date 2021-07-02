import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import Landing from "./views/landingPage/Landing.js";
import Login from "./views/loginPage/Login.js";
import Register from "./views/registerPage/Register.js";
import Header from "./views/common/Header.js";
import Footer from "./views/common/Footer.js";
import VideoUpload from "./views/uploadPage/VideoUpload";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/upload" component={Auth(VideoUpload, true)} />
        <Route exact path="/" component={Auth(Landing, null)} />
        <Route exact path="/login" component={Auth(Login, false)} />
        <Route exact path="/register" component={Auth(Register, false)} />
      
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
