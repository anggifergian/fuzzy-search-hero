import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <React.Fragment>
      <h1>App.js</h1>
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Redirect from="/" exact to="/home" />
      </Switch>
    </React.Fragment>
  );
};

export default App;
