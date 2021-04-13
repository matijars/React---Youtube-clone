import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

import Home from "./components/home/Home";
import Trending from "./components/trending/Trending";
import Subscriptions from "./components/subscriptions/Subscriptions";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="app">
      <Header getQuery={(q) => setQuery(q)} />
      <div className="app__body">
        <Router>
          <div className="sidebar__container">
            <Sidebar />
          </div>
          <div className="mainContent__container">
            <Switch>
              <Route path="/" exact render={() => <Home query={query} />} />
              <Route path="/trending" component={Trending} />
              <Route path="/subscriptions" component={Subscriptions} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
