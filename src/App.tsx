import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from './pages/home';
import Creator from './pages/creator';
import Login from './pages/login';
import News from './pages/news';

const Router = require("react-router-dom").BrowserRouter;
const Switch = require("react-router-dom").Switch;
const Route = require("react-router-dom").Route;

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}           />
                <Route path='/creator' exact component={Creator} />
                <Route path='/login' exact component={Login}     />
                <Route path='/news' exact component={News}       />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
