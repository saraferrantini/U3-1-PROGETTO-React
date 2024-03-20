// //1)MOVIEDETAILS = componente chiamato MovieDetail che mostrerà i dettagli di un singolo film.

// //2)APP.JS = definire le rotte per la pagina principale (MovieGallery) e la pagina di dettaglio (MovieDetail).
// //Rotta per MovieDetail con un parametro di percorso per l'ID del film

// //3)MOVIEGALLERY -  aggiungere un link a ciascun film che reindirizza alla pagina di dettaglio del film corrispondente

// import React, { useEffect, useState } from "react";
// import { Alert, Card, Col, Container, Image, Row, Spinner } from "react-bootstrap";
// import { useParams } from "react-router-dom";

// const MovieDetail = () => {
//   const params = useParams();

//   const [movieDetail, setMovieDetail] = useState({});
//   const [isError, setIsError] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   const getOneMovie = async () => {
//     try {
//       const res = await fetch("http://www.omdbapi.com/?apikey=76caa3a1&i=" + params.movieId);
//       if (res.ok) {
//         const data = await res.json();
//         setMovieDetail(data);
//         setTimeout(() => {
//           setIsLoading(false);
//         }, 800);
//       } else {
//         throw new Error("I dati del film non sono stati trovati!");
//       }
//     } catch (error) {
//       console.log(error);
//       setIsError(true);
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     getOneMovie();
//   }, []);

//   return (
//     <Container fluid className="my-5">
//       <Row className="d-flex justify-content-center align-items-center mx-4 mb-4">
//         {isLoading && (
//           <div className="text-center">
//             <Spinner animation="grow" style={{ color: "#cb121a" }} />
//           </div>
//         )}
//         {isError && (
//           <div className="text-center">
//             <Alert variant="danger">Non funziona</Alert>
//           </div>
//         )}
//         <Col className="col-10 border border-white rounded-2">
//           <Row>
//             <Col className="col-4 ps-0">
//               <Image src={movieDetail.Poster} className="w-100 rounded-start-2" />
//             </Col>
//             <Card.Body className="col-4 p-4">
//               <h5 className="w-100" style={{ color: "#E50815" }}>
//                 {movieDetail.Title}
//               </h5>
//               <p className="text-white fw-bold">
//                 {movieDetail.Year} |<em> {movieDetail.Director}</em>
//               </p>
//               <p className="text-white-50">
//                 Actors:<em className="text-white"> {movieDetail.Actors}</em>
//               </p>
//               <p className="text-white-50">
//                 Awards:<em className="text-white"> {movieDetail.Awards}</em>
//               </p>
//               <p className="text-white-50">
//                 {movieDetail.BoxOffice} | {movieDetail.Runtime}
//               </p>
//               <hr className="text-white-50" />
//               <p className="text-white">{movieDetail.Plot}</p>
//             </Card.Body>
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default MovieDetail;

//---
import { useEffect, useState } from "react";
import { Alert, Card, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const params = useParams();

  const [movieDetail, setMovieDetail] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getOneMovie = async () => {
    try {
      const res = await fetch("http://www.omdbapi.com/?apikey=76caa3a1&i=" + params.movieId);
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setMovieDetail(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      } else {
        throw new Error("I dati del film non sono  stati trovati!");
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOneMovie();
  }, []);

  return (
    <>
      <Container fluid className="my-5">
        <Row className="d-flex justify-content-center align-items-center mx-4 mb-4">
          {isLoading && (
            <div className="text-center">
              <Spinner animation="grow" style={{ color: "#cb121a" }} />
            </div>
          )}
          {isError && (
            <div className="text-center">
              <Alert variant="danger">Non funziona</Alert>
            </div>
          )}
          <Col className="col-10 border border-white rounded-2">
            <Row>
              <Col className="col-4 ps-0">
                <Image src={movieDetail.Poster} className="w-100 rounded-start-2" />
              </Col>
              <Card.Body className="col-4 p-4">
                <h5 className="w-100" style={{ color: "#E50815" }}>
                  {movieDetail.Title}
                </h5>
                <p className="text-white fw-bold">
                  {movieDetail.Year} |<em> {movieDetail.Director}</em>
                </p>
                <p className="text-white-50">
                  Actors:<em className="text-white"> {movieDetail.Actors}</em>
                </p>
                <p className="text-white-50">
                  Awards:<em className="text-white"> {movieDetail.Awards}</em>
                </p>
                <p className="text-white-50">
                  {movieDetail.BoxOffice} | {movieDetail.Runtime}
                </p>
                <hr className="text-white-50" />
                <p className="text-white">{movieDetail.Plot}</p>
              </Card.Body>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MovieDetail;
