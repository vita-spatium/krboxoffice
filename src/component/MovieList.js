import { useState, useEffect } from "react";
import Movie from "./Movie";
import styles from "./MovieList.module.css";

function MovieList({ searchDate }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const apiKey = "cb66aad0a5e9ee66951e9a026eec5a86";
      const src = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apiKey}&targetDt=${searchDate}`;

      const json = await (await fetch(src)).json();

      setMovies(json.boxOfficeResult.dailyBoxOfficeList);
      setLoading(false);
    }

    fetchData();
  }, [searchDate]);

  return (
    <div className={styles.movielist}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map((movie) => (
          <Movie
            movie={movie}
            key={movie.movieCd}
            // cd={movie.movieCd}
            // title={movie.movieNm}
            // rank={movie.rank}
            // opendt={movie.openDt}
            // audiacc={movie.audiAcc}
          ></Movie>
        ))
      )}
    </div>
  );
}

export default MovieList;
