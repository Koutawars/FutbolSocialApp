// librerias
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Paginas
import Login from '../pages/Login'
import SignIn from '../pages/SignIn'
import Home from '../pages/Home'
import Profile from '../pages/Profile'

// seguridad
import Auth from './SecurityComponents/AuthenticatedComponent'


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path={"/login"} component = {Login} ></Route>
          <Route exact path={"/registrar"} component = {SignIn} ></Route>
          <Route exact path={"/"} component = {Auth(Home)} ></Route>
          <Route exact path={"/perfil"} component = {Auth(Profile)} ></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
