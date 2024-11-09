import Image from "next/image";
import { Section1 } from "./components/acceuil/Section1";
import { Header } from "./components/Header";
<<<<<<< HEAD
import { Cat } from "./components/produits/Cat";
// import { Articles: } from "./components/produits/Articles";
import { Section2 } from "./components/acceuil/Section2";
import { Ogou } from "./components/acceuil/Ogou";
import { Footer } from "./components/Footer";

=======
import { Section2 } from "./components/acceuil/Section2";
>>>>>>> 6a6f018 (debut de la section 2)
export default function Home() {
  return (<>
    <Header/>
    
    <Section1/>
<<<<<<< HEAD
    <Cat />
    <Section2 />
    {/* <Articles /> */}
    <Ogou />
    <Footer />
=======
    <Section2/>
>>>>>>> 6a6f018 (debut de la section 2)
    </>
  );
}
