import React from "react";
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom';


import Meetings from "./press-composant/meetings.js";
import Newspapers from "./press-composant/newspapers.js";
import Radio from "./press-composant/radio.js";
import Tv from "./press-composant/tv.js";
import All from "./press-composant/all.js";

import { Redirect } from "react-router-dom";
 
function Press(props) {
  return (
    <div>
      <Router>
        <div className="App">
          <div className="">
            <div className="nav  flex-column subnav">
              <NavLink to="/press/all" activeClassName="active-NavLink">
                ALL
              </NavLink>
              <NavLink to="/press/newspaper" activeClassName="active-NavLink">
                NEWSPAPER
              </NavLink>
              <NavLink to="/press/tv" activeClassName="active-NavLink">
                TV
              </NavLink>
              <NavLink to="/press/radio" activeClassName="active-NavLink">
                RADIO
              </NavLink>
              <NavLink to="/press/meetings" activeClassName="active-NavLink">
                MEETINGS
              </NavLink>
            </div>
          </div>
          <Switch>
            <Route exact path="/press">
              <Redirect to="/press/all" />
            </Route>
            <Route exact path="/press/all" component={All} />
            <Route exact path="/press/newspaper" component={Newspapers} />
            <Route exact path="/press/tv" component={Tv} />
            <Route exact path="/press/radio" component={Radio} />

            <Route exact path="/press/meetings" component={Meetings} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
 
export default Press;