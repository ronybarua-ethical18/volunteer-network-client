import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import AddEvents from './components/Event/AddEvents';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
function App() {
  return (
    <div id="bg-image">
      <div className="shade">
        <Router>
          <Switch>

            <Route exact path="/">
              <Header />
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/home">
            <Header />
              <Home />
            </Route>
            <Route path="/addEvent">
              <AddEvents />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
