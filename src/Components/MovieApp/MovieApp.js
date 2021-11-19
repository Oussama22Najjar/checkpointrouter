import React, { useState } from "react";
import "../../App.css";
import { MoviesList } from "../MoviesList/MoviesList";
import { SearchMovie } from "../SearchMovie/SearchMovie";
import { AddMovie } from "../AddMovie/AddMovie";

const MovieApp = ({ setMoviesList, moviesList }) => {
  const [nameSearch, setNameSearch] = useState("");



  const addMovie = (newMovie) => { 
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    <div className="container-movies">
      <br/>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          {/* <ul   style={{display:'flex', justifyContent:'space-around',width:'200px'}}>
              <li style={{listStyle:'none'}}>Home</li>
              <li style={{listStyle:'none'}}>Movies</li>
          </ul> */}
        <SearchMovie setNameSearch={setNameSearch} />
        <AddMovie addMovie={addMovie} />
        </div>
        

      <MoviesList
        moviesList={moviesList}
        nameSearch={nameSearch}
      />

      {/* <div className="addmovie">
      
      </div> */}
    </div>
  );
};

export default MovieApp;
