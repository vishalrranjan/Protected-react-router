import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import { Shop } from "./Shop";
import { Home } from "./Home";
import { ProtectedRoute } from "./Protected-route";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/shop" exact component={Shop} />
          <Route path="*" component={() => <h1>404 NOT FOUND</h1>} />
        </Switch>
      </div>
    </Router>
  );
}
