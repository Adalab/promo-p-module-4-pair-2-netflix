const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

server.set('view engine', 'ejs');

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

/*

https://localhost:4000...

/movies   -> JSON
--/login    -> X JSON
/movie/[NUMERITO]   -> Pgina

/friends.jpg
/gambita.jpg

*/

const db = Database('./src/db/database.db', { verbose: console.log });

// Endpoint para servir dinámicamente la landing de las movies

server.get('/movies/', (req, res) => {
  const query = db.prepare(`SELECT * FROM movies`);
  const moviesList = query.all();

  const response = {
    success: true,
    movies: moviesList,
  };
  // qué me devuelve
  res.json(response);
});

// Para conseguir el id de la película que se va a renderizar con movieId
server.get('/movie/:movieId', (req, res) => {
  // dentro del server.get hay que crear una constante para encontrar el id de las películas con req.params.movieId
  console.log(req.params.movieId);

  const query = db.prepare('SELECT * FROM movies WHERE id=?');

  // const foundMovie = movies.find((movie) => movie.id === req.params.movieId);
  // El valor de la parte variable de la ruta (donde hemos puesto :movieId)
  // viene en la variable req.params.movieId ( :movieId -> movieId )
  //   foundMovie es una variable con un objeto con los datos a renderizar
  // (o con los que hidratar la plantilla)
  // id
  // title
  // gender
  // image
  const foundMovie = query.get(req.params.movieId);

  console.log('movie', foundMovie);

  res.render('movie', foundMovie);
});

server.use(express.json());
// Servidor estático para guardar los ficheros
const staticServer = './src/public';
server.use(express.static(staticServer));
// Servidor estático para guardar las imagenes
const staticServerImage = './src/public-movies-images';
server.use(express.static(staticServerImage));
