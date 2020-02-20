import React from "react";
import Home from "../pages/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;