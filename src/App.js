import { useState } from "react";
import * as _date from "date-fns";

import MovieList from "./component/MovieList";

import styles from "./App.module.css";
import Footer from "./component/Footer";
import Comments from "./component/Comments";

function DayBoxOffice() {
  const [searchDate, setSearchDate] = useState("");

  if (searchDate === "") {
    setSearchDate(
      _date.format(_date.sub(new Date(), { days: 1 }), "yyyy-MM-dd")
    );
  }

  const onChange = (event) => {
    console.log(event.target.value);
    setSearchDate(event.target.value);
  };

  return (
    <div className={styles.app}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          <img className={styles.logo} src="./logo192.png" alt="logo" />
          KR BOX Office
        </h1>
        <input
          type="date"
          name="searchDt"
          id="searchDt"
          onChange={onChange}
          value={searchDate}
        />
      </div>
      <div className={styles.movie_container}>
        <MovieList searchDate={searchDate.replaceAll("-", "")} />
      </div>
      <hr />
      <Comments />
      <Footer />
    </div>
  );
}

function App() {
  return <DayBoxOffice />;
}

export default App;
