import "./App.css";
// AGGIUNGIAMO L'IMPORT DEL CSS DI BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
// Import per il css
import "./components/style.css";

//1)importo Navbar
import Navbar from "./components/Navbar";
//2)importo Footer
import Footer from "./components/Footer";
//3)importo MovieGallery
import MovieGallery from "./components/MovieGallery";

function App() {
  return (
    <div>
      <Navbar />
      <MovieGallery />

      <Footer />
    </div>
  );
}

export default App;
