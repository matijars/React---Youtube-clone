import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

import Home from "./components/home/Home";
import Trending from "./components/trending/Trending";
import Subscriptions from "./components/subscriptions/Subscriptions";

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app__body'>
        <Router>
          <Sidebar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/trending' component={Trending} />
            <Route path='/subscriptions' component={Subscriptions} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
