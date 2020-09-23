import React from 'react';
import Login from '../pages/Login'
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component = {Login} ></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
