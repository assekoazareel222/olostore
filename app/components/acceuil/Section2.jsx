<<<<<<< HEAD
import Link from "next/link";

export function Section2() {
  return (
    <div className="w-full ">
      <div class="flex flex-wrap items-center justify-center w-[90%] m-auto py-1 md:py-2 gap-8">

        <div class="bg-[#3883A2] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
          <div>
            <img src="../assets/monte.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
          </div>
          <div>
          <p class="text-black font-bold">Momtre</p>
            <p class="text-white font-bold text-lg">Whatch se5</p>
            <p class="text-white text-xl mb-2">85 000</p>
            <button class="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">Commander</button>
          </div>
        </div>

        <div class="bg-[#3883A2] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
          <div>
            <img src="../assets/vélo.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
          </div>
          <div>
          <p class="text-black font-bold ">Vélo</p>
            <p class="text-white font-bold text-lg">Vtc Z35</p>
            <p class="text-white text-xl mb-2">70 000</p>
            <button class="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">Commander</button>
          </div>
        </div>

        <div class="bg-[#3883A2] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
          <div>
            <img src="../assets/écran.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
          </div>
          <div>
          <p class="text-black font-bold">Tv</p>
            <p class="text-white font-bold text-lg">Tv Lg 55</p>
            <p class="text-white text-xl mb-2">350 000</p>
            <button class="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">Commander</button>
          </div>
        </div>

        <div class="bg-[#3883A2] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
        <div>
            <img src="../assets/pc1.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
          </div>
          <div>
          <p class="text-black font-bold">Pc</p>
            <p class="text-white font-bold text-lg">Mac Book M1</p>
            <p class="text-white text-xl mb-2">350 000</p>
            <Link href="../../article"  className="bg-white text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px] ">
          {/* <button>  */}
            Commander
          {/* </button> */}
          </Link>
          </div>
        </div>
        
      </div>

      <div className="w-full">
    <div className="flex items-center max-sm:hidden  justify-center w-[85%] m-auto py-1 md:py-2">
      <div className="bg-[#27282B] p-4 rounded-[20px] w-full h-[400px] flex justify-between items-center">
        
        <div className="flex-shrink-0 m-[5%]">
          <img src="../assets/baff.svg" alt="Téléphone Samsung A55" className="w-30 h-60" />
        </div>
        
        <div className=" flex flex-col justify-center items-end h-full m-[5%]">
          <div className="mb-4">
            <p className="text-white text-center font-extrabold">Eceinte JBL</p>
            <p className="text-white text-center font-extrabold text-lg">JBL Hot-Spot W4z</p>
            <p className=" text-[#8CC63F] font-bold text-center text-bold">220 000</p>
          </div>
          <Link href="../../article"  className="bg-white text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px] ">
          {/* <button>  */}
            Commander
          {/* </button> */}
          </Link>
        </div>
        
      </div>
    </div>

    <div class="flex flex-wrap items-center justify-center w-[90%] m-auto py-1 md:py-2 gap-8">

<div class="bg-[#B4B5B0] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
<div>
    <img src="../assets/baff.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
  </div>
  <div>
  <p class="text-black font-bold">Enceinte</p>
    <p class="text-white font-bold text-lg">JBL 360</p>
    <p class="text-white text-xl mb-2">40 000</p>
    <button class="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">Commander</button>
  </div>
</div>

<div class="bg-[#B4B5B0] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
  <div>
  <img src="../assets/phone.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
  </div>
  <div>
  <p class="text-black font-bold">Telephone</p>
    <p class="text-white font-bold text-lg">Samsung A55</p>
    <p class="text-white text-xl mb-2">220 000</p>
    <button class="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">Commander</button>
  </div>
</div>

<div class="bg-[#B4B5B0] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
  <div>
    <img src="../assets/phonejaune.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
  </div>
  <div>
  <p class="text-black font-bold">Telephone</p>
    <p class="text-white font-bold text-lg">Pochette A55</p>
    <p class="text-white text-xl mb-2">2 000</p>
    <button class="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">Commander</button>
  </div>
</div>

<div class="bg-[#B4B5B0] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
  <div>
    <img src="../assets/ordinateurrouge.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
  </div>
  <div>
  <p class="text-black font-bold">Pc</p>
    <p class="text-white font-bold text-lg">Mac Book M2</p>
    <p class="text-white text-xl mb-2">220 000</p>
    <Link href="../../article"  className="bg-white text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px] ">
  {/* <button>  */}
    Commander
  {/* </button> */}
  </Link>
  </div>
</div>

<div class="bg-[#3883A2] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
  <div>
    <img src="../assets/manette.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
  </div>
  <div>
  <p class="text-black font-bold">Pc</p>
    <p class="text-white font-bold text-lg">Xbox SerieS</p>
    <p class="text-white text-xl mb-2">23 500</p>
    <button class="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">Commander</button>
  </div>
</div>

<div class="bg-[#3883A2] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
<div>
    <img src="../assets/écran.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
  </div>
  <div>
  <p class="text-black font-bold">Tv</p>
    <p class="text-white font-bold text-lg">Tv Lg 55</p>
    <p class="text-white text-xl mb-2">350 000</p>
    <button class="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">Commander</button>
  </div>
</div>

<div class="bg-[#3883A2] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
  <div>
    <img src="../assets/ordinoir.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
  </div>
  <div>
  <p class="text-black font-bold">Pc</p>
    <p class="text-white font-bold text-lg">Asus Rog 4</p>
    <p class="text-white text-xl mb-2">485 000</p>
    <Link href="../../article"  className="bg-white text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px] ">
  {/* <button>  */}
    Commander
  {/* </button> */}
  </Link>
  </div>
</div>

<div class="bg-[#3883A2] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
  <div>
    <img src="../assets/monte.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
  </div>
  <div>
  <p class="text-black font-bold">Momtre</p>
    <p class="text-white font-bold text-lg">Whatch se5</p>
    <p class="text-white text-xl mb-2">85 000</p>
    <Link href="../../article"  className="bg-white text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px] ">
  {/* <button>  */}
    Commander
  {/* </button> */}
  </Link>
  </div>
</div>

</div>

  </div>

  

=======
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
>>>>>>> 6a6f018 (debut de la section 2)
    </div>
  );
}
