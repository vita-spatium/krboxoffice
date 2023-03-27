import styles from "./Movie.module.css";
import MoviePoster from "./MoviePoster";
import { intervalToDuration } from "date-fns";

function numberFormat(number) {
  return Intl.NumberFormat("ko-KR").format(number);
}

function calcDaysSinceOpenDt(opendt) {

  if (opendt === " ") return 0;
  
  const today = new Date();  
  const custTime = '00:00:00.000Z';
  const openday = new Date(`${opendt} ${custTime}`);

  return intervalToDuration({ start: openday, end: today }).days;
}

function rankDirection(rankInten) {
  const rank = Number(rankInten);
  if (rank === 0) return "rank.png";
  else if (rank > 0) return "rankup.png";
  else return "rankdown.png";
}

function Movie({ movie }) {
  return (
    <div key={movie.movieCd} className={styles.movie}>
      <h1 className={styles.title}>
        <div>
          {movie.rank}. {movie.movieNm}
        </div>
        {movie.rankOldAndNew !== "NEW" ? (
          <div className={styles.rank_container}>
            <img
              className={styles.rankicon}
              src={`./icons/${rankDirection(movie.rankInten)}`}
              alt="rank_icon"
            />
            <span className={styles.ranktext}>
              {movie.rankInten !== "0" ? Math.abs(movie.rankInten) : ""}
            </span>
          </div>
        ) : (
          <img className={styles.ranknew} src="/icons/new.png" alt="rank_new" />
        )}
      </h1>
      <div className={styles.info}>
        <MoviePoster title={movie.movieNm} cd={movie.movieCd}></MoviePoster>
        <ul className={styles.detail}>
          <li className={styles.bold}>개봉일: {movie.openDt}</li>
          <li className={styles.bold}>
            개봉일수:{" "}
            <span className={styles.red}>
              {calcDaysSinceOpenDt(movie.openDt)} 일
            </span>
          </li>
          <li className={[styles.bold, styles.red].join(" ")}>
            당일 관객수: {numberFormat(movie.audiCnt)} 명
          </li>
          <li>[전일기준]</li>
          <li className={styles.bold}>
            누적 관객수: {numberFormat(movie.audiAcc)} 명
          </li>
          <li>
            전일 대비 관객수 증감
            <br />
            &nbsp;&nbsp;{numberFormat(movie.audiInten)} 명({movie.audiChange} %)
          </li>
          <li>당일 스크린수: {numberFormat(movie.scrnCnt)}</li>
          <li>당일 상영횟수: {numberFormat(movie.showCnt)}</li>
          {/* <li>KMDB코드 : {movie.movieCd}</li> */}
        </ul>
      </div>
    </div>
  );
}

export default Movie;
