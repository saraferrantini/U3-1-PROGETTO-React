//dobbiamo aggiungere gli IMPORT degli elementi di react bootstrap
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/netflix_logo.png";
import avatar from "../assets/avatar.png";

//creo una componente a funzione
const RestaurantNavbar = function () {
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
            <Nav.Link href="#">Tv Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#">
              <i className="fas fa-search"></i>
            </Nav.Link>
            <Nav.Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </Nav.Link>
            <Nav.Link href="#">Kids</Nav.Link>
            <Nav.Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
              </svg>
            </Nav.Link>
            <Nav.Link href="#">
              <i className="fas fa-bell"></i>
            </Nav.Link>
            <div className="dropdown">
              <Nav.Link
                className="dropdown-toggle"
                href="#"
                id="dropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={avatar} width="30" height="30" alt="" />
              </Nav.Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">
                    Prime
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Abbonati
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Prime
                  </a>
                </li>
              </ul>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
//esporto
export default RestaurantNavbar;
