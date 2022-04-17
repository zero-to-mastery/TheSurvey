import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Survey from "./Survey";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/survey" component={Survey} />
            {/* <Route path="/blogs/:id" component={BlogDetails} />
            <Route path="*" component={NotFound} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
