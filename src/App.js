import React from "react";
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom"; // Importa BrowserRouter, Routes e Route da React Router
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/style.css";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import MovieGallery from "./components/MovieGallery";
import TVShows from "./components/TVShow"; // Importa il componente TVShows

//abbiamo inserito:
// ☑️BrowserRouter - Routes - Route

function App() {
  return (
    <BrowserRouter>
      <div>
        <MyNavbar />
        {/* Definizione delle rotte */}

        <Routes>
          {/* Rotta per la pagina TVShows */}
          <Route path="/tv-shows" element={<TVShows />} />
        </Routes>
        {/* <MovieGallery /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
