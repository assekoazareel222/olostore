import Image from "next/image";
import { Section1 } from "./components/acceuil/Section1";
import { Header } from "./components/Header";
import { Section2 } from "./components/acceuil/Section2";
export default function Home() {
  return (<>
          
    
    <Header/>
    <Section1/>
    <Section2/>
    </>
  );
}
