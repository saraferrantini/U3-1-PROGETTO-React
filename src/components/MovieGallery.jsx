// //☑️OBIETTIVO:
// //Creare un'applicazione React che mostra una galleria di film per tre diverse saghe cinematografiche: Harry Potter, Il Signore degli Anelli e Star Wars.
// //Per ogni saga, viene effettuata una chiamata all'API OMDB per recuperare i dati dei film associati, e vengono visualizzati i titoli e le immagini delle locandine dei primi sei film di ciascuna saga.

// //import
// import React, { Component } from "react";

// //☑️creo una componente a classe MovieGallery, che estende Component. Questo componente rappresenta una galleria di film per una determinata saga cinematografica.
// class MovieGallery extends Component {
//   //☑️ state: Inizializzo lo stato del componente MovieGallery con un array vuoto di film. Questo array verrà utilizzato per memorizzare i film ottenuti dall'API
//   state = {
//     movies: [],
//   };

//   //☑️COMPONENTDIDMOUNT: per chiamare la funzione fetchMovies() una volta che il componente è stato montato nel DOM.
//   //La funzione fetchMovies() effettua una richiesta all'API OMDB per recuperare i dati dei film associati alla saga specificata come props saga.
//   componentDidMount() {
//     this.fetchMovies();
//   }

//   //☑️FETCH per recuperare i dati dei film dall'API
//   fetchMovies = () => {
//     //richiesta HTTP all'API OMDB
//     fetch(`http://www.omdbapi.com/?s=${this.props.saga}&apikey=7d5dfa37`)
//       .then((response) => {
//         //se la risposta è ok
//         if (response.ok) {
//           //Converte la risposta in formato JSON
//           return response.json();
//         } else {
//           //altrimenti,lancia un errore
//           throw new Error("Errore nella chiamata API");
//         }
//       })

//       .then((data) => {
//         //per limitare i film a sei e aggiornare lo stato del componente
//         const limitedMovies = data.Search ? data.Search.slice(0, 6) : [];
//         this.setState({ movies: limitedMovies });
//       })
//       .catch((error) => {
//         //per Gestire eventuali errori nella chiamata API
//         console.log("Errore:", error);
//       });
//   };

//   //☑️RENDER - per visualizzare dinamicamente i film recuperati dall'API e di mostrare i loro titoli e immagini all'interno delle card Bootstrap.
//   render() {
//     return (
//       <div className="row mb-4">
//         <div className="col">
//           {/* Mostra il titolo della saga cinematografica */}
//           <h2>{this.props.saga}</h2>

//           <div className="row">
//             {/* Mappa ogni film nell'array movies e crea una card per ognuno */}
//             {this.state.movies.map((movie) => (
//               <div key={movie.imdbID} className="col-md-2 mb-3">
//                 <div className="card h-100">
//                   {/* Mostra l'immagine del film */}
//                   <img src={movie.Poster} className="card-img-top img-fluid" alt={movie.Title} />
//                   <div className="card-body">
//                     {/* Mostra il titolo del film */}
//                     <p className="card-text">{movie.Title}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// //☑️COMPONENTE APP - contiene tre istanze del componente MovieGallery, ciascuna rappresentante una diversa saga cinematografica.
// //Render - definisce come questi componenti vengono disposti e visualizzati all'interno dell'applicazione.
// class App extends Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <MovieGallery saga="Harry Potter" />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col">
//             <MovieGallery saga="Lord of the Rings" />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col">
//             <MovieGallery saga="Star Wars" />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

// // // ----

// // // 1)STATE:Inizializzo lo stato del componente MovieGallery con un array vuoto di film. Questo array verrà utilizzato per memorizzare i film ottenuti dall'API
// // // 2)componentDidMount: dove chiamiamo la funzione fetchMovies la quale effettua una chiama api per richiedere i dati richiesti.
// // // 3)FETCH -Recupero dei dati dalla risposta API: Si gestisce la risposta dell'API, convertendo i dati in formato JSON e limitando i risultati ai primi sei film.
// // // 4)RENDER: Si visualizzano dinamicamente i film recuperati dall'API all'interno delle card Bootstrap, mostrando il titolo e l'immagine di ciascun film.
// // // 5)Componente App: Si definisce una classe che contiene tre istanze della componente MovieGallery, ciascuna rappresentante una diversa saga cinematografica.

// // // INOLTRE:
// // // Passaggio delle props: Si passa il nome della saga cinematografica come prop quando si istanziano le componenti MovieGallery nel componente App.
// // // Utilizzo della prop saga: Ogni istanza del componente MovieGallery utilizza il nome della saga come chiave per effettuare la chiamata all'API OMDB e recuperare i dati dei film corrispondenti.

//---

// ☑️MODIFICHE PER INSERIRE REACT ROUTER

import React, { Component } from "react";
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

//☑️Inizializzazione dello stato:
//Inizializzazione dello stato del componente con tre array vuoti Saga1, Saga2, e Saga3, che verranno utilizzati per memorizzare i dati dei film provenienti da tre saghe diverse.
//loading è un booleano che indica se il caricamento dei dati è in corso, mentre error è utilizzato per memorizzare eventuali errori durante il recupero dei dati.
class MovieGallery extends Component {
  state = {
    Saga1: [],
    Saga2: [],
    Saga3: [],
    loading: true,
    error: null,
  };

  // ☑️ComponentDidMount: per eseguire il recupero dei dati dei film da tre saghe diverse utilizzando l'API OMDB.
  //Una volta recuperati i dati con successo, aggiorna lo stato del componente con i primi 6 film di ciascuna saga e imposta loading su false. Se si verifica un errore durante il recupero dei dati, lo stato error viene aggiornato con il messaggio di errore e loading viene impostato su false.
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

  //☑️RENDER: viene verificato lo stato di loading e error. Se loading è true, viene visualizzato uno spinner di caricamento.
  //Se error è stato impostato, viene visualizzato un messaggio di errore. Altrimenti, viene restituito il layout della galleria dei film.
  render() {
    const { Saga1, Saga2, Saga3, loading, error } = this.state;

    if (loading) {
      return (
        <Container fluid className="bg-dark">
          <Spinner animation="border" role="status" className="mt-5">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
      );
    }

    if (error) {
      return (
        <Container fluid className="bg-dark">
          <Alert variant="danger" className="mt-5">
            {error}
          </Alert>
        </Container>
      );
    }

    //☑️Per ciascuna saga, viene mappato l'array di film corrispondente e viene generato un Card per ogni film.
    // Ogni Card contiene un'immagine del poster del film e un link che reindirizza alla pagina di dettaglio del film.
    return (
      <Container fluid className="bg-dark">
        <div className="mt-3">
          <h3 className="text-white">Harry Potter</h3>
          <Row>
            {Saga1.map((e) => (
              <Col className="col-md-4 col-xs-6 col-lg-2 mt-2" key={e.imdbID}>
                <Card style={{ width: "14rem" }}>
                  <Link to={"/movie/" + e.imdbID}>
                    <Card.Img variant="top" src={e.Poster} style={{ height: "20rem" }} />
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="mt-5">
          <h3 className="text-white"> Star Trek</h3>
          <Row>
            {Saga2.map((e) => (
              <Col className="col-md-4 col-xs-6 col-lg-2 mt-2" key={e.imdbID}>
                <Card style={{ width: "14rem" }}>
                  <Link to={"/movie-details/" + e.imdbID}>
                    <Card.Img variant="top" src={e.Poster} style={{ height: "20rem" }} />
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="mt-5">
          <h3 className="text-white">Pirates of the Caribbean</h3>
          <Row>
            {Saga3.map((e) => (
              <Col className="col-md-4 col-xs-6 col-lg-2 mt-2" key={e.imdbID}>
                <Card style={{ width: "14rem" }}>
                  {/* il link utilizza l'URL /movie-details/ seguito dall'ID del film (e.imdbID), che probabilmente reindirizzerà l'utente a una pagina con i dettagli del film. */}
                  <Link to={"/movie-details/" + e.imdbID}>
                    <Card.Img variant="top" src={e.Poster} style={{ height: "20rem" }} />{" "}
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
