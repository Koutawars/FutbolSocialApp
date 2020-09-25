import React from 'react';
import Login from '../pages/Login'
import Registro from '../pages/Registro'
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component = {Login} ></Route>
          <Route exact path={"/registrar"} component = {Registro} ></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
