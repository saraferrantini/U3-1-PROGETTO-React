//☑️LINK - A differenza di <a> standard, Link intercetta il click dell'utente e gestisce la navigazione in modo che l'intera pagina non debba essere ricaricata.
//Ciò porta a una navigazione più veloce e reattiva --> viene utilizzato per creare link navigabili
//☑️USE LOCATION - è un hook di React Router che restituisce l'oggetto location rappresentante l'URL corrente.

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom"; // Importa Link e useLocation da React Router
import logo from "../assets/netflix_logo.png";
import avatar from "../assets/avatar.png";

const MyNavbar = function () {
  //useLocation viene utilizzato per ottenere l'URL corrente e determinare se il link alla pagina "TVShows" è attivo o meno.
  const location = useLocation(); // Ottieni l'URL corrente con useLocation()

  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="" width="80" height="auto" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#">Home</Nav.Link>
            {/* Utilizza il componente Link per navigare alla pagina TVShows */}
            <Nav.Link
              as={Link}
              to="/tv-shows"
              className={`text-secondary fw-bold ${location.pathname === "/tv-shows" ? "active" : ""}`}
            >
              Tv Shows
            </Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#">
              <img src={avatar} width="30" height="30" alt="" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
