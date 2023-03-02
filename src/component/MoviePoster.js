import { useState, useEffect } from "react";
import styles from "./MoviePoster.module.css";

function MoviePoster({ cd, title }) {
  const [imgSrc, setImgSrc] = useState("/no_poster.jpg");

  useEffect(() => {
    async function fetchData() {
      const proxy_kobis =
        window.location.hostname === "localhost" ? "" : "/proxy_kobis";
      const src = `${proxy_kobis}/kobis/business/mast/mvie/searchMovieDtl.do?sType=movie&code=${cd}`;

      const res = await (await fetch(src)).text();
      const startPos = res.indexOf('<a class="fl thumb" href="');
      const parseStr = res.substring(startPos, startPos + 400).split('"');

      // parseStr[3] : large poster
      // parseStr[9] : thumb poster
      // ToDO
      // - fetchData() 전에 poster 유무 확인 후 없다면 fetch후 저장

      setImgSrc("https://www.kobis.or.kr" + parseStr[9]);
    }

    fetchData();
  }, [cd]);

  return <img className={styles.poster} src={imgSrc} alt={title} />;
}

export default MoviePoster;
