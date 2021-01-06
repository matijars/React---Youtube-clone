import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <div className='sidebar__container'>
            <Sidebar />
          </div>
          <div className='mainContent__container'>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/trending' component={Trending} />
              <Route path='/subscriptions' component={Subscriptions} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
