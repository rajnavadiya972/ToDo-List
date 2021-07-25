import React from 'react'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Menu from './component/Menu';
import Home from './component/Home';
import ToDo from './component/Todo';
import ErrorPage from './component/Error';
import './App.css';


function App() {
  return (
    <>
      <Router>
        <Menu />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/ToDo' component={ToDo}></Route>
          <Route path='/*' component={ErrorPage}></Route>
        </Switch>
        <footer>
          <p>Developer : Raj</p>
        </footer>
      </Router>
    </>
  );
}

export default App;
