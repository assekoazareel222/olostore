import styles from "../../style/section1.module.css";
import Image from "next/image";
export function Section1() {
  return (
    <div className={styles.section}>
      <div className={styles.section1}>
        <div className={styles.left}>
          <div className={styles.titre}>O'LOSTORE</div>{" "}
          <div className={styles.para}>Vos articles <br />à porter <br /> de main</div>
          <button className={styles.button}>commander</button>
        </div>{" "}
        <div className={styles.right}>
          
        </div>
      </div>
    </div>
  );
}
