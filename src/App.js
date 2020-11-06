import React, { useState, useEffect } from 'react';
import { Router, navigate, Link } from '@reach/router';
import PersonCard from './components/PersonCard';
import Display from './components/Display'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const cats = ["","people","planets"];

function App() {

  const [id, setID] = useState ("");
  // const [cats] = useState (["","People","Planet"]);
  const [category, setCategory] = useState (cats[0]);
  

  // const getStarWars = () => {
  //   fetch("http https://swapi.dev/api/")
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // }

  const handleQuery = e => {
    e.preventDefault();
    navigate(`/${category}/${id}`);
    setCategory(cats[0]);
    setID("");
  }

  return (
    <div className="App">
      <form className=" col-3 mx-auto" onSubmit={handleQuery}>
        <div className="form-group">
          <label>Search for:</label>
          <select className="form-control" value={category} onChange={(e) => setCategory(e.target.value)}>
            {
              cats.map((cat,idx) => <option value={cat} key={idx}>{ idx === 0 ? "--Select Category--" : cat}</option>)
            }
          </select>
        </div>
        <div className="form-group">
          <label>ID:</label>
          <input className="form-control" type="text" value={id} onChange={(e) => setID(e.target.value)}/>
        </div>
        <input type="submit" value="Search" className="btn btn-primary"/>
      </form>
      <Router>
        <Display path="/:category/:id" />
      </Router>
    </div>
  );
}

export default App;

