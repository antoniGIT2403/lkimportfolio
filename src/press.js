import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import Live from "./press-composant/live.js";
import Meetings from "./press-composant/meetings.js";
import Newspapers from "./press-composant/newspapers.js";
import Radio from "./press-composant/radio.js";
import Tv from "./press-composant/tv.js";
import Web from "./press-composant/web.js";
import { Redirect } from "react-router-dom";
 
function Press(props) {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <div className="">
            <div className="nav  flex-column subnav">
              <NavLink to="/press/newspaper" activeClassName="active-NavLink">
                NEWSPAPER
              </NavLink>
              <NavLink to="/press/tv" activeClassName="active-NavLink">
                TV
              </NavLink>
              <NavLink to="/press/radio" activeClassName="active-NavLink">
                RADIO
              </NavLink>

              <NavLink to="/press/web" activeClassName="active-NavLink">
                WEB
              </NavLink>
              <NavLink to="/press/meetings" activeClassName="active-NavLink">
                MEETINGS
              </NavLink>
              <NavLink to="/press/live" activeClassName="active-NavLink">
                LIVE
              </NavLink>
            </div>
          </div>
          <Route exact path="/press">
            <Redirect to="/press/newspaper" />
          </Route>

          <Route exact path="/press/newspaper" component={Newspapers} />
          <Route exact path="/press/tv" component={Tv} />
          <Route exact path="/press/radio" component={Radio} />
          <Route exact path="/press/web" component={Web} />
          <Route exact path="/press/meetings" component={Meetings} />
          <Route exact path="/press/live" component={Live} />
        </div>
      </BrowserRouter>
    </div>
  )
}
 
export default Press;