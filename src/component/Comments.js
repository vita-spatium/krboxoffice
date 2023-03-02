import styles from "./Comments.module.css";

export default function Comments() {
  return (
    <div className={styles.comment_container}>
      <p className={styles.comment}>
        영화진흥위원회의 일별 박스오피스로
        <br /> <span className={styles.bold}>당일 관객수</span>를 기반으로한
        순위입니다.
      </p>
      <p className={styles.comment}>
        <span className={styles.bold}>집계가 완료된 어제까지만 조회가능</span>
        하며
        <br />
        당일 관객수는 제공하고 있지 않습니다.
      </p>
    </div>
  );
}
