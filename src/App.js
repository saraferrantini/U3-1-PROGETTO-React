import React from "react";
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/style.css";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import MovieGallery from "./components/MovieGallery";
import TVShows from "./components/TVShow";
import MovieDetail from "./components/MovieDetail"; // Importa il componente MovieDetail

// //abbiamo inserito:
// // ☑️BrowserRouter - Routes - Route

function App() {
  return (
    <BrowserRouter>
      <div>
        <MyNavbar />
        <Routes>
          {/* <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} /> */}
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/" element={<MovieGallery />} />
          {/* Il parametro :id rappresenta l'ID univoco del film, che verrà passato al componente MovieDetail */}
          <Route path="/movie/:movieId" element={<MovieDetail />} />
        </Routes>
        <MovieGallery />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
