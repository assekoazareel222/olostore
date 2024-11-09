import Image from "next/image";
import { Header } from "./components/Header";
import { Cat } from "./components/produits/Cat.jsx";
import { Articles } from "./components/produits/Articles";
import { Articlespub } from "./components/produits/Articlespub";

export default function Home() {
  return (
    <>
      <><Header /></>
      <><Cat/></>
      <><Articles /></>
      <><Articlespub /></>
    </>
  );
}
