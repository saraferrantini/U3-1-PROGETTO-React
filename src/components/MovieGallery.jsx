// //☑️OBIETTIVO:
// //Creare un'applicazione React che mostra una galleria di film per tre diverse saghe cinematografiche: Harry Potter, Il Signore degli Anelli e Star Wars.
// //Per ogni saga, viene effettuata una chiamata all'API OMDB per recuperare i dati dei film associati, e vengono visualizzati i titoli e le immagini delle locandine dei primi sei film di ciascuna saga.

import React, { Component } from "react";
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

//☑️ Inizializzazione dello stato:
// Inizializzazione dello stato del componente con tre array vuoti Saga1, Saga2, e Saga3, che verranno utilizzati per memorizzare i dati dei film provenienti da tre saghe diverse.
// loading è un booleano che indica se il caricamento dei dati è in corso, mentre error è utilizzato per memorizzare eventuali errori durante il recupero dei dati.
class MovieGallery extends Component {
  state = {
    Saga1: [],
    Saga2: [],
    Saga3: [],
    loading: true,
    error: null,
  };

  // ☑️ ComponentDidMount: per eseguire il recupero dei dati dei film da tre saghe diverse utilizzando l'API OMDB.
  // Una volta recuperati i dati con successo, aggiorna lo stato del componente con i primi 6 film di ciascuna saga e imposta loading su false. Se si verifica un errore durante il recupero dei dati, lo stato error viene aggiornato con il messaggio di errore e loading viene impostato su false.
  componentDidMount = async () => {
    try {
      const response1 = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=76caa3a1&s=harry%20potter");
      const response2 = await fetch("http://www.omdbapi.com/?apikey=76caa3a1&s=Star+Trek");
      const response3 = await fetch("http://www.omdbapi.com/?apikey=76caa3a1&s=Pirates+of+the+Caribbean");

      if (!response1.ok || !response2.ok || !response3.ok) {
        throw new Error("Failed to fetch data");
      }

      const data1 = await response1.json();
      const data2 = await response2.json();
      const data3 = await response3.json();

      this.setState({
        Saga1: data1.Search.slice(0, 6),
        Saga2: data2.Search.slice(0, 6),
        Saga3: data3.Search.slice(0, 6),
        loading: false,
      });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  //☑️ RENDER: viene verificato lo stato di loading e error. Se loading è true, viene visualizzato uno spinner di caricamento.
  // Se error è stato impostato, viene visualizzato un messaggio di errore. Altrimenti, viene restituito il layout della galleria dei film.
  render() {
    const { Saga1, Saga2, Saga3, loading, error } = this.state;

    if (loading) {
      return (
        <Container className="bg-dark">
          <Spinner animation="border" role="status" className="mt-5">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
      );
    }

    if (error) {
      return (
        <Container className="bg-dark">
          <Alert variant="danger" className="mt-5">
            {error}
          </Alert>
        </Container>
      );
    }

    //☑️ Per ciascuna saga, viene mappato l'array di film corrispondente e viene generato un Card per ogni film.
    // Ogni Card contiene un'immagine del poster del film e un link che reindirizza alla pagina di dettaglio del film.
    return (
      <Container className="bg-dark">
        <div className="mt-3">
          <h3 className="text-white">Harry Potter</h3>
          <Row className="row-cols-6">
            {Saga1.map((e) => (
              <Col key={e.imdbID}>
                <Card className="bg-dark text-white" style={{ width: "12rem", margin: "0.5rem" }}>
                  <Link to={"/movie/" + e.imdbID}>
                    <Card.Img variant="top" src={e.Poster} style={{ height: "100%", objectFit: "cover" }} />
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="mt-5">
          <h3 className="text-white"> Star Trek</h3>
          <Row className="row-cols-6">
            {Saga2.map((e) => (
              <Col key={e.imdbID}>
                <Card className="bg-dark text-white" style={{ width: "12rem", margin: "0.5rem" }}>
                  <Link to={"/movie-details/" + e.imdbID}>
                    <Card.Img variant="top" src={e.Poster} style={{ height: "100%", objectFit: "cover" }} />
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="mt-5">
          <h3 className="text-white">Pirates of the Caribbean</h3>
          <Row className="row-cols-6">
            {Saga3.map((e) => (
              <Col key={e.imdbID}>
                <Card className="bg-dark text-white" style={{ width: "12rem", margin: "0.5rem" }}>
                  <Link to={"/movie-details/" + e.imdbID}>
                    <Card.Img variant="top" src={e.Poster} style={{ height: "100%", objectFit: "cover" }} />
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    );
  }
}

export default MovieGallery;
