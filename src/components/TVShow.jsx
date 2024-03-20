import React, { Component } from "react";

class TVShows extends Component {
  //proprietà di stato chiamata harryPotterMovies, che inizialmente è un array vuoto. Questo stato verrà utilizzato per memorizzare i film di Harry Potter recuperati dall'API.
  state = {
    harryPotterMovies: [],
  };

  //All'interno di questo metodo, viene chiamato il metodo fetchHarryPotterMovies(), che è responsabile di recuperare i film di Harry Potter dall'API.
  componentDidMount() {
    this.fetchHarryPotterMovies();
  }

  //funzione fetch() per effettuare una richiesta GET all'API.
  fetchHarryPotterMovies = () => {
    fetch("http://www.omdbapi.com/?s=harry%20potter&apikey=7d5dfa37")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella chiamata API");
        }
      })
      .then((data) => {
        const harryPotterMovies = data.Search ? data.Search : [];
        this.setState({ harryPotterMovies });
      })
      .catch((error) => {
        console.log("Errore:", error);
      });
  };

  //Render - viene restituito l'elemento React da visualizzare. Attualmente, viene restituito solo un semplice <div> con un titolo "Harry Potter Films".
  render() {
    return (
      <div>
        <h1>Harry Potter Films</h1>
      </div>
    );
  }
}

export default TVShows;
