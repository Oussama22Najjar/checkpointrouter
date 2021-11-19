import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { BiAddToQueue } from "react-icons/bi";

import "./addmovie.css";

export const AddMovie = ({ addMovie }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");


  const submitMovie = () => {
    let newMovie = {
      name: name,
      description: description,
      img: image,
      date: date,
      id: Math.random(),
    };
    console.log(newMovie);
    addMovie(newMovie);
    handleClose();
  };

  return (
    <>
      <BiAddToQueue size="50px" onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Movie Name "
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Movie Description "
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Movie Date"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Image film"
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>


          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitMovie}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
