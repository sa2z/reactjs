import { useEffect, useState } from "react";
function App() {
  const [loading,setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )).json();
    // const response = await fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    // );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  // useEffect(() => {
  //   fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
  //     .then(response => response.json())
  //       .then((json) => {
  //         setMovies(json.data.movies);
  //         setLoading(false);
  //       });
  // }, [])
  console.log(movies);
  return <div>
    {loading ? (
      <h1>Loading...</h1>
    ) : (
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
              {movie.generes.map((g,idx) => (
                <li key={g}>{g}</li>)
              )};
            </ul>
          </div>
        ))}
      </div>
    )};
  </div>
}

export default App;