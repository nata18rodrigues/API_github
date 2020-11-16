import React, {Component} from 'react';
import api from './api';
import ReactRouter,{ Redirect } from 'react-router';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Login from './componentes/Login';
import Mostrar from './componentes/Mostrar';
 


function App() {   
  return ( <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Mostrar/:user" component={Mostrar} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;

//https://api.github.com/users/nata18rodrigues
