import React from 'react';
import './App.css';
import Nav from './components/appBar';
import About from './About';
import Order from './components/order';  
import Home from './components/order';  
import Login from './components/login'
import Register from './components/register'
import {BrowserRouter, Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div>

    <BrowserRouter>
        <Nav/>
        <Switch>
        <Route exact path="/"  component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/order" component={Order}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Register}/>
        </Switch> 
    </BrowserRouter>
    </div>
  );
}

export default App;
