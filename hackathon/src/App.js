import './App.css';
import React from "react";
import {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DocProfile from './components/Doctor/DocProfile';
import "animate.css"

function App() {

  
  // fetch("https://endlessmedicalapi1.p.rapidapi.com/GetOutcomes", {
  //   "method": "GET",
  //   "headers": {
  //     "x-rapidapi-host": "endlessmedicalapi1.p.rapidapi.com",
  //     "x-rapidapi-key": "undefined"
  //   }
  // })
  // .then(response => {
  //   console.log(response);
  // })
  // .catch(err => {
  //   console.error(err);
  // });

  const [patients, setPatients] = useState([])

  useEffect(() => {
    fetch('/get').then(response => 
      response.json().then(data => {
      setPatients(data);
    })
    );
  }, [])

  return (
    <Router basename={process.env.PUBLIC_URL}>
     <div>
       <Navbar></Navbar>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
       
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/doctor">
           <DocProfile></DocProfile>
          </Route>
        </Switch>
        <Footer></Footer>

      </div>
    </Router>
  );
}

export default App;
