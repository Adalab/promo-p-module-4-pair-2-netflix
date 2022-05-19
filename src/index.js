const express = require('express');
const cors = require('cors');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

server.set('view engine', 'ejs')

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const movies =[
    {
      id: '1',
      title: 'Gambita de dama',
      gender: 'Drama',
      image: '//localhost:4000/gambita.jpg'
    },
    {
      id: '2',
      title: 'Friends',
      gender: 'Comedia',
      image: '//localhost:4000/friends.jpg'
    }
  ]

/*

https://localhost:4000...

/movies   -> JSON
--/login    -> X JSON
/movie/[NUMERITO]   -> Pgina

/friends.jpg
/gambita.jpg

*/

server.get('/movies/', (req, res) => {
  const response = {
    success: true,
    movies: movies,
  };
  res.json(response)
});

// Para conseguir el id de la película que se va a renderizar con movieId
server.get('/movie/:movieId', (req, res) => {
// dentro del server.get hay que crear una constante para encontrar el id de las películas con req.params.movieId
 // El valor de la parte variable de la ruta (donde hemos puesto :movieId)
 // viene en la variable req.params.movieId ( :movieId -> movieId )
 console.log(req.params.movieId);

  const foundMovie = movies.find(movie => movie.id === req.params.movieId);
    //   foundMovie es una variable con un objeto con los datos a renderizar
  // (o con los que hidratar la plantilla)
  // id
  // title
  // gender
  // image

  console.log(foundMovie);

  res.render("movie", foundMovie);
});

server.use(express.json());
// Servidor estático para guardar los ficheros
const staticServer="./src/public";
server.use(express.static(staticServer));
// Servidor estático para guardar las imagenes
const staticServerImage="./src/public-movies-images";
server.use(express.static(staticServerImage));