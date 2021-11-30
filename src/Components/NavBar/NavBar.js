import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import AddMovie from "../AddMovie/AddMovie";
import { SearchMovie } from "../SearchMovie/SearchMovie";

const NavBar = ({ addMovie ,setNameSearch}) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My Movies App</Navbar.Brand>
          <SearchMovie setNameSearch={setNameSearch}/>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">List of movies</Nav.Link>
            <Nav.Link href="#pricing">Favorite movies</Nav.Link>
          </Nav>

          <AddMovie addMovie={addMovie} />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
