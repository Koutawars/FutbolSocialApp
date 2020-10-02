// librerias
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Paginas
import Login from '../pages/Login'
import Registro from '../pages/Registro'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'

// seguridad
import Auth from './AuthenticatedComponent'


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path={"/login"} component = {Login} ></Route>
          <Route exact path={"/registrar"} component = {Registro} ></Route>
          <Route exact path={"/"} component = {Auth(Home)} ></Route>
          <Route exact path={"/perfil"} component = {Auth(Perfil)} ></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
