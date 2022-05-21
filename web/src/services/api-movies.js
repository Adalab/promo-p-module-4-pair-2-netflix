// login

const getMoviesFromApi = (props) => {
  console.log('Se están pidiendo las películas de la app');
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  return fetch(
    `//localhost:4000/movies?gender=${props.gender}&sort=${props.sort}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

//hacer otro fetch para /movie/id y se debe ejecutar al hacer click

const objToExport = {
  getMoviesFromApi: getMoviesFromApi,
};

export default objToExport;
