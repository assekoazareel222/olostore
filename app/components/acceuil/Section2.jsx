import styles from "../../style/section2.module.css";
import Image from "next/image";
export function Section2() {
  return (
    <div className={styles.card}>
      <div className={styles.section2}>
        <button className={styles.button}>Les bonnes affaires</button>
        <div className={styles.produit1}>
          <div className={styles.produitA}>
            <Image
              src="/assets/1372-samsung-galaxy-a55-5g-8-256gb-azul-libre-review-removebg-preview 2.svg"
              alt="Search Icon"
              width={300}
              height={300}
              className={styles.Image1}
            />
            <p className={styles.nom}>
              Telephone <br /> Samsung A55
            </p>
            <div className={styles.prix}>
              {" "}
              <p className={styles.prix1}>200.000</p>{" "}
              <p className={styles.prix2}>220.000</p>{" "}
            </div>
            <button className={styles.button}>commander</button>
          </div>
          <div className={styles.produitB}>
            <Image
              src="/assets/vélo.svg"
              alt="Search Icon"
              width={400}
              height={400}
              className={styles.Image1}
            />
            <p className={styles.nom}>
              Telephone <br /> Samsung A55
            </p>
            <div className={styles.prix}>
              {" "}
              <p className={styles.prix1}>200.000</p>{" "}
              <p className={styles.prix2}>220.000</p>{" "}
            </div>
            <button className={styles.button}>commander</button>
          </div>
          <div className={styles.produitC}>
            <Image
              src="/assets/ordinateurrouge.svg"
              alt="Search Icon"
              width={400}
              height={400}
              className={styles.Image1}
            />
            <p className={styles.nom}>
              Telephone <br /> Samsung A55
            </p>
            <div className={styles.prix}>
              {" "}
              <p className={styles.prix1}>200.000</p>{" "}
              <p className={styles.prix2}>220.000</p>{" "}
            </div>
            <button className={styles.button}>commander</button>
          </div>
        </div>
        <div className={styles.produit2}>
          <div className={styles.produitD}>
            <Image
              src="/assets/ordinateurrouge.svg"
              alt="Search Icon"
              width={400}
              height={400}
              className={styles.Image1}
            />
            <p className={styles.nom}>
              Telephone <br /> Samsung A55
            </p>
            <div className={styles.prix}>
              {" "}
              <p className={styles.prix1}>200.000</p>{" "}
              <p className={styles.prix2}>220.000</p>{" "}
            </div>
            <button className={styles.button}>commander</button>
          </div>
          <div className={styles.produitE}>
            <Image
              src="/assets/ordinateurrouge.svg"
              alt="Search Icon"
              width={400}
              height={400}
              className={styles.Image1}
            />
            <p className={styles.nom}>
              Telephone <br /> Samsung A55
            </p>
            <div className={styles.prix}>
              {" "}
              <p className={styles.prix1}>200.000</p>{" "}
              <p className={styles.prix2}>220.000</p>{" "}
            </div>
            <button className={styles.button}>commander</button>
          </div>
          <div className={styles.produitF}>
            <Image
              src="/assets/ordinateurrouge.svg"
              alt="Search Icon"
              width={400}
              height={400}
              className={styles.Image1}
            />
            <p className={styles.nom}>
              Telephone <br /> Samsung A55
            </p>
            <div className={styles.prix}>
              {" "}
              <p className={styles.prix1}>200.000</p>{" "}
              <p className={styles.prix2}>220.000</p>{" "}
            </div>
            <button className={styles.button}>commander</button>
          </div>
        </div>
      </div>
    </div>
  );
}
