import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie"
function Detail() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const {id} = useParams();
    const getMovie = async () => {
        const json =  await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
           ).json();
            setMovies(json.data.movie);
            setLoading(false); 
            //console.log(json);

    };
    useEffect(() => {
        getMovie();
    }, []);
    console.log(movies);
    return (
      <div>
        {loading ? (
          "loading"
        ) : (
          <div style={{textAlign:"center", width : "70%", backgroundColor : "tomato"}}>
            <img src={movies.medium_cover_image}></img>
            <h2>{movies.title}</h2>
            <q>{movies.description_full}</q>
            <ul>
              {movies.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
}
export default Detail;