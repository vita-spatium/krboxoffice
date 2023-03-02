import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span className={styles.bold}>Powered by ...</span>
      </p>
      <p>
        <a
          className={styles.link}
          href="https://www.flaticon.com/free-icons/box-office"
          title="box-office icons"
          target="_blank"
          rel="noreferrer"
        >
          Box-office icons created by Freepik - Flaticon
        </a>
      </p>
      <p>
        <a
          className={styles.link}
          href="https://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do"
          title="Kofic Open API"
          target="_blank"
          rel="noreferrer"
        >
          Kofic(Korea Film Council) - OPEN API
        </a>
      </p>
    </footer>
  );
}
