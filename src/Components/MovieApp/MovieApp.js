import React  from "react";
import "../../App.css";
import { MoviesList } from "../MoviesList/MoviesList";


const MovieApp = ({ setMoviesList, moviesList ,nameSearch}) => {



 

  return (
    <div className="container-movies">
      <br/>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          {/* <ul   style={{display:'flex', justifyContent:'space-around',width:'200px'}}>
              <li style={{listStyle:'none'}}>Home</li>
              <li style={{listStyle:'none'}}>Movies</li>
          </ul> */}
        
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
