import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Apropos from './apropos';
import Accueil from './accueil';
import Config from './config';


export default class App extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      StateParent: ''
    };
  }

  exampleApp = (e) => {
    console.log('console app : ', e);
    this.setState({...this.state, StateParent:e});
  }


  render() {
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
              <Accueil propsChild={this.state.StateParent} />
            </Route>
            <Route path="/config" >
              <Config propsChild={this.exampleApp}/>
            </Route>
            <Route path="/apropos">
              <Apropos />
            </Route>
          </Switch>
        </div>
      </Router>
    );  
  }
}

