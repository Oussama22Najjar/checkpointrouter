import React from "react";

import "./searchmovie.css";

export const SearchMovie = ({
  setNameSearch,


}) => {
  return (
    <div className="search">

      <div>
        <form action="" autoComplete="on">
          <input
            className="input-search"
            name="search"
            type="text"
            placeholder="search movie "
            onChange={(event) => {
              setNameSearch(event.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
};
