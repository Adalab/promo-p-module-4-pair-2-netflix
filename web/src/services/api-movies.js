// login

const getMoviesFromApi = () => {
  console.log('Se están pidiendo las películas de la app');
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
   return fetch("//localhost:4000/movies"{ method: "GET" }) // aqui ponemos la direccion del servidor que vamos a crear
.then(response => response.json())
.then(data => {
   return data;
});
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi
};

export default objToExport;
