import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Switch } from "react-router-dom";
import MovieApp from "./Components/MovieApp/MovieApp";
import { moviesData } from "./Components/Moviesdata";


const App = () => {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState(""); 
    
  const addMovie = (newMovie) => { 
    setMoviesList([...moviesList, newMovie]);
  };
  

  return (
   
    
    <div className="app">
       <NavBar setNameSearch={setNameSearch} addMovie={addMovie}   />
     
      <Route
        exact
        path="/"
        render={() => (
          <MovieApp moviesList={moviesList} setMoviesList={setMoviesList}  nameSearch={nameSearch}/>
        )}
      />
  
    </div>
  );
};

export default App;
