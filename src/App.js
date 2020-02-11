import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { render } from "@testing-library/react";
import Apropos from './apropos';
import Accueil from './accueil';
import Config from './config';


export default function App() {
  //render(){
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/config">Config</Link>
            </li>
            <li>
              <Link to="/apropos">A propos</Link>
            </li>
          </ul>

          <hr />

        
          <Switch>
            <Route exact path="/">
              <Accueil />
            </Route>
            <Route path="/config">
              <Config />
            </Route>
            <Route path="/apropos">
              <Apropos />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
//}  


