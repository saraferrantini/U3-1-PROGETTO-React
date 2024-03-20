//☑️OBIETTIVO:
//Creare un'applicazione React che mostra una galleria di film per tre diverse saghe cinematografiche: Harry Potter, Il Signore degli Anelli e Star Wars.
//Per ogni saga, viene effettuata una chiamata all'API OMDB per recuperare i dati dei film associati, e vengono visualizzati i titoli e le immagini delle locandine dei primi sei film di ciascuna saga.

//import
import React, { Component } from "react";

//☑️creo una componente a classe MovieGallery, che estende Component. Questo componente rappresenta una galleria di film per una determinata saga cinematografica.
class MovieGallery extends Component {
  //☑️ state: Inizializzo lo stato del componente MovieGallery con un array vuoto di film. Questo array verrà utilizzato per memorizzare i film ottenuti dall'API
  state = {
    movies: [],
  };

  //☑️COMPONENTDIDMOUNT: per chiamare la funzione fetchMovies() una volta che il componente è stato montato nel DOM.
  //La funzione fetchMovies() effettua una richiesta all'API OMDB per recuperare i dati dei film associati alla saga specificata come props saga.
  componentDidMount() {
    this.fetchMovies();
  }

  //☑️FETCH per recuperare i dati dei film dall'API
  fetchMovies = () => {
    //richiesta HTTP all'API OMDB
    fetch(`http://www.omdbapi.com/?s=${this.props.saga}&apikey=7d5dfa37`)
      .then((response) => {
        //se la risposta è ok
        if (response.ok) {
          //Converte la risposta in formato JSON
          return response.json();
        } else {
          //altrimenti,lancia un errore
          throw new Error("Errore nella chiamata API");
        }
      })

      .then((data) => {
        //per limitare i film a sei e aggiornare lo stato del componente
        const limitedMovies = data.Search ? data.Search.slice(0, 6) : [];
        this.setState({ movies: limitedMovies });
      })
      .catch((error) => {
        //per Gestire eventuali errori nella chiamata API
        console.log("Errore:", error);
      });
  };

  //☑️RENDER - per visualizzare dinamicamente i film recuperati dall'API e di mostrare i loro titoli e immagini all'interno delle card Bootstrap.
  render() {
    return (
      <div className="row mb-4">
        <div className="col">
          {/* Mostra il titolo della saga cinematografica */}
          <h2>{this.props.saga}</h2>

          <div className="row">
            {/* Mappa ogni film nell'array movies e crea una card per ognuno */}
            {this.state.movies.map((movie) => (
              <div key={movie.imdbID} className="col-md-2 mb-3">
                <div className="card h-100">
                  {/* Mostra l'immagine del film */}
                  <img src={movie.Poster} className="card-img-top img-fluid" alt={movie.Title} />
                  <div className="card-body">
                    {/* Mostra il titolo del film */}
                    <p className="card-text">{movie.Title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

//☑️COMPONENTE APP - contiene tre istanze del componente MovieGallery, ciascuna rappresentante una diversa saga cinematografica.
//Render - definisce come questi componenti vengono disposti e visualizzati all'interno dell'applicazione.
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <MovieGallery saga="Harry Potter" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <MovieGallery saga="Lord of the Rings" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <MovieGallery saga="Star Wars" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// // ----

// // 1)STATE:Inizializzo lo stato del componente MovieGallery con un array vuoto di film. Questo array verrà utilizzato per memorizzare i film ottenuti dall'API
// // 2)componentDidMount: dove chiamiamo la funzione fetchMovies la quale effettua una chiama api per richiedere i dati richiesti.
// // 3)FETCH -Recupero dei dati dalla risposta API: Si gestisce la risposta dell'API, convertendo i dati in formato JSON e limitando i risultati ai primi sei film.
// // 4)RENDER: Si visualizzano dinamicamente i film recuperati dall'API all'interno delle card Bootstrap, mostrando il titolo e l'immagine di ciascun film.
// // 5)Componente App: Si definisce una classe che contiene tre istanze della componente MovieGallery, ciascuna rappresentante una diversa saga cinematografica.

// // INOLTRE:
// // Passaggio delle props: Si passa il nome della saga cinematografica come prop quando si istanziano le componenti MovieGallery nel componente App.
// // Utilizzo della prop saga: Ogni istanza del componente MovieGallery utilizza il nome della saga come chiave per effettuare la chiamata all'API OMDB e recuperare i dati dei film corrispondenti.
//-------------------------------------
