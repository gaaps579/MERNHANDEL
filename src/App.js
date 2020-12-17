import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import UserProfile from "./componentsV2/containers/userProfile";
import Navbar from "./componentsV2/containers/navbar";

// sections - paths
import AllPublications from "./sections/AllPublications";
import HelpersContainer from "./componentsV2/containers/HelpersContainer";
import RegistrationV2 from "./sections/Registration";
import LogInV2 from "./sections/LogIn";
import MyPublications from "./sections/MyPublications";
import SingularPublication from "./sections/SingularPublication";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div id="app">
          <Switch>
            <Route path="/user-profile" component={UserProfile} />
            <Route path="/registration" component={RegistrationV2} />
            <Route path="/login" component={LogInV2} />
            <Route path="/MyPublications" component={MyPublications} />
            <Route
              path="/Publication/:publicationId"
              children={<SingularPublication />}
            />
            <Route path="/" component={AllPublications} />
          </Switch>

          <HelpersContainer />
        </div>
      </Router>
    );
  }
}

export default App;
