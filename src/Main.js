import React from "react";
import { Container, Menu } from 'semantic-ui-react'
import { Route, NavLink, BrowserRouter, Link } from "react-router-dom";
import Singers from "./Singers"
import Songs from "./Songs"
import Gigs from "./Gigs"

let Main = () => {
  let colors = {
    cyan: 'E0FBFC',
    green: '06D6AO',
    blue: '118AB2',
    black: '073B4C',
    ruby: 'D81E5B'
  }

    return (
        <BrowserRouter>
          <Menu className="header">
            <Menu.Item name="Songs" as={Link} to="/songs" />
            <Menu.Item name="Singers" as={Link} to="/singers" />
            <Menu.Item name="Gigs" as={Link} to="/gigs" />
          </Menu>
          <div className="content">
             <Route path="/songs" component={Songs}/>
             <Route path="/singers" component={Singers}/>
             <Route path="/gigs" component={Gigs}/>
          </div>
        </BrowserRouter>
    );
}
 
export default Main;