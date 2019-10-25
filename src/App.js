import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import WorkoutList from "./components/workoutlist.component";
import EditWorkout from "./components/editworkout.component";
import CreateWorkout from "./components/createworkout.component";
import CreateUser from "./components/createuser.component";



// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />

        <br />
        <Route path="/" exact component={WorkoutList} />
        <Route path="/edit/:id" component={EditWorkout} />
        <Route path="/create" component={CreateWorkout} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
