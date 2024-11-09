import Image from "next/image";
import { Section1 } from "./components/acceuil/Section1";
import { Header } from "./components/Header";
import { Cat } from "./components/produits/Cat";
// import { Articles: } from "./components/produits/Articles";
import { Section2 } from "./components/acceuil/Section2";
import { Ogou } from "./components/acceuil/Ogou";
import { Footer } from "./components/Footer";

export default function Home() {
  return (<>
    <Header/>
    <Section1/>
    <Cat />
    <Section2 />
    {/* <Articles /> */}
    <Ogou />
    <Footer />
    </>
  );
}
