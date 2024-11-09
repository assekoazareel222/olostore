import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Footer } from "../components/produits/Cat";
import { Articles, Footer } from "../components/produits/Articles";
import { Articlespub, Footer } from "../components/produits/Articlespub";

export default function formulaire (){
    return (
        <div>
            <Header />
            <Cat />
            <Articles />
            <Articlespub />
            <Footer />
        </div>
    )
}