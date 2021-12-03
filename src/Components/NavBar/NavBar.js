import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import AddMovie from "../AddMovie/AddMovie";
import { SearchMovie } from "../SearchMovie/SearchMovie";
import { Link } from "react-router-dom";
const NavBar = ({ addMovie ,setNameSearch}) => {
  const navstyle = {
  color: 'white'

  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My Movies App</Navbar.Brand>
          <SearchMovie setNameSearch={setNameSearch}/>
          <Nav className="me-auto">
            <Link style={navstyle} to="/home">Home</Link>
            <Link style={navstyle} to="/List-of-movies">List of movies</Link>
            <Link style={navstyle} to="/Favorite-movies">Favorite movies</Link>
          </Nav>

          <AddMovie addMovie={addMovie} />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
