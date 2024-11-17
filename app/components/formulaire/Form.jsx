import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // Utilisation de useSearchParams pour récupérer les params d'URL

export function Form() {
  const searchParams = useSearchParams();  // Permet de récupérer les paramètres dans l'URL
  const [name, setName] = useState(""); // Nom du produit
  const [price, setPrice] = useState(""); // Prix du produit

  const [nom, setNom] = useState(""); // "nom" attendu par la base de données
  const [prenom, setPrenom] = useState(""); // "prenom" attendu par la base de données
  const [numero_transaction, setNumeroTransaction] = useState("");
  const [adresse, setAdresse] = useState("");
  const [mode_livraison, setModeLivraison] = useState("express"); // Valeur par défaut 'express'
  const [moyen_paiement, setMoyenPaiement] = useState("");

  // Valeur par défaut pour nombre_article
  const [nombre_article, setNombreArticle] = useState(1);

  // Etat pour gérer la soumission et la facture générée
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [facture, setFacture] = useState(null); // Etat pour stocker la facture après soumission
  const [formulaire, setFormulaire] = useState(null); // Etat pour stocker les données du formulaire
  const [error, setError] = useState(""); // Pour afficher une erreur dans l'UI

  useEffect(() => {
    // Récupérer les paramètres d'URL pour 'name' et 'price' si présents
    const productName = searchParams.get("name");
    const productPrice = searchParams.get("price");

    if (productName && productPrice) {
      setName(productName);
      setPrice(productPrice);
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Début de l'envoi

    // Validation des champs obligatoires
    if (!nom || !prenom || !numero_transaction || !adresse || !mode_livraison || !moyen_paiement) {
      setError("Tous les champs doivent être remplis !");
      setIsSubmitting(false); // Fin de l'envoi
      return;
    }

    const formData = {
      nom,
      prenom,
      numero_transaction,
      adresse,
      mode_livraison,
      moyen_paiement,
      nom_article: name,
      prix_article: price,
      nombre_article: nombre_article, // Par défaut, 1
    };

    try {
      const res = await fetch("https://ecommerce-xxz7.onrender.com/api/formulaire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log("Réponse de l'API:", result);

      if (res.ok) {
        alert(result.message || "Formulaire envoyé avec succès !");
        // Si la réponse contient une facture, on la stocke dans l'état
        if (result.facture) {
          setFacture(result.facture); // Enregistrer la facture générée
        }
        // Mettre à jour l'état avec les données du formulaire
        if (result.formulaire) {
          setFormulaire(result.formulaire); // Enregistrer les données du formulaire
        }
      } else {
        setError(result.message || "Une erreur s'est produite.");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi des données:", error);
      setError("Erreur lors de l'envoi des données.");
    } finally {
      setIsSubmitting(false); // Fin de l'envoi
    }
    console.log("Données envoyées :", formData);
  };
    

    return (
      <div className="w-full flex flex-col items-center">
        <h1 className="text-lg md:text-2xl mt-6 font-bold text-[#3883A2]">
          Formulaire de commande
        </h1>
        <form
          onSubmit={handleSubmit}
          className="md:flex w-[90%] mt-4 m-auto md:justify-between max-sm:items-center max-sm:flex-col gap-4"
        >
          <div className="md:w-[50%] w-full md:pl-8 gap-4 pl-2 pr-2 flex flex-col">
            {/* Prénom */}
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName">nom</label>
              <input
                type="text"
                id="firstName"
                name="nom"
                for="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="border-x-[3px] pl-4 bg-transparent border-y-[3px] md:w-[90%] md:h-14 h-8 w-full rounded-md border-[#3883A2]"
              />
            </div>

            {/* Nom */}
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName">prenom</label>
              <input
                type="text"
                id="lastName"
                name="prenom"
                for="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className="border-x-[3px] pl-4 bg-transparent border-y-[3px] md:w-[90%] w-full md:h-14 h-8 rounded-md border-[#3883A2]"
              />
            </div>

            {/* Nom du produit */}
            <div>
              <label htmlFor="productName">Nom du produit</label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={name || ""}
                readOnly
                className="border-x-[3px] pl-4 bg-transparent border-y-[3px] md:w-[90%] w-full md:h-14 h-8 rounded-md border-[#3883A2]"
              />
            </div>

            {/* Prix du produit */}
            <div>
              <label htmlFor="productPrice">Prix</label>
              <input
                type="text"
                id="productPrice"
                name="productPrice"
                value={price || ""}
                readOnly
                className="border-x-[3px] pl-4 bg-transparent border-y-[3px] md:w-[90%] w-full md:h-14 h-8 rounded-md border-[#3883A2]"
              />
            </div>

            {/* Numéro de transaction */}
            <div className="flex flex-col gap-2">
              <label htmlFor="transactionNumber">
                Numéro de transaction Airtel Money/Mobi Cash
              </label>
              <input
                type="text"
                id="transactionNumber"
                name="numero_transaction"
                for="numero_transaction"
                value={numero_transaction}
                onChange={(e) => setNumeroTransaction(e.target.value)}
                className="border-x-[3px] pl-4 bg-transparent border-y-[3px] md:w-[90%] w-full md:h-14 h-8 rounded-md border-[#3883A2]"
              />
            </div>

            {/* Adresse */}
            <div className="flex flex-col gap-2">
              <label htmlFor="address">Adresse</label>
              <input
                type="text"
                id="address"
                name="adresse"
                for="adresse"
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
                className="border-x-[3px] pl-4 bg-transparent border-y-[3px] md:w-[90%] w-full md:h-14 h-8 rounded-md border-[#3883A2]"
              />
            </div>
          </div>

          {/* Mode de livraison et moyen de paiement */}
          <div className="md:w-[50%] w-full gap-4 flex max-sm:pl-2 max-sm:pr-2 flex-col">
            <div className="flex flex-col gap-2">
              <label htmlFor="deliveryMode">Mode de livraison</label>
              <select
                id="deliveryMode"
                name="mode_livraison"
                for="mode_livraison"
                value={mode_livraison}
                onChange={(e) => setModeLivraison(e.target.value)}
                className="border-x-[3px] pl-4 bg-transparent border-y-[3px] md:w-[90%] w-full md:h-14 h-8 rounded-md border-[#3883A2]"
              >
                <option value="express">express</option>
                <option value="retrait en magasin">retrait en magasin</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="paymentMethod">Moyen de paiement</label>
              <select
                id="paymentMethod"
                name="moyen_paiement"
                value={moyen_paiement}
                onChange={(e) => setMoyenPaiement(e.target.value)}
                className="border-x-[3px] pl-4 bg-transparent border-y-[3px] md:w-[90%] w-full md:h-14 h-8 rounded-md border-[#3883A2]"
              >
                <option value="">Sélectionner</option>
                <option value="mobil cash">mobil cash</option>
                <option value="airtel money">airtel money</option>
                <option value="espèces">espèces</option>
              </select>
            </div>
          </div>
        </form>

        {/* Bouton Soumettre */}
        <button
          onClick={handleSubmit}
          disabled={isSubmitting} // Désactive le bouton pendant l'envoi
          className={`bg-[#3883A2] text-white w-[123px] text-center rounded-md mt-8 mb-8 h-9 ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-[#2e6f81]"}`}
        >
          {isSubmitting ? "Envoi..." : "Soumettre"}
        </button>
          {/* Affichage de la facture en avant, avec flou du formulaire à l'arrière */}
      {facture && formulaire && (
        <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50 backdrop-blur-md z-20 min-h-screen">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
            <h2 className="text-xl font-bold text-center text-[#3883A2]">Votre Facture</h2>
            <div className="mt-4">
              <p><strong>Nom:</strong> {formulaire.nom}</p>
              <p><strong>Prénom:</strong> {formulaire.prenom}</p>
              <p><strong>Numéro de transaction:</strong> {formulaire.numero_transaction}</p>
              <p><strong>Adresse de livraison:</strong> {formulaire.adresse}</p>
              <p><strong>Mode de livraison:</strong> {formulaire.mode_livraison}</p>
              <p><strong>Moyen de paiement:</strong> {formulaire.moyen_paiement}</p>

              {/* Affichage des détails de la facture */}
              <p><strong>Produit:</strong> {facture.nom_article}</p>
              <p><strong>Prix Unitaire:</strong> {facture.prix_article} FCFA</p>
              <p><strong>Quantité:</strong> {facture.nombre_article}</p>
              <p><strong>Frais de livraison:</strong> {facture.livraison} FCFA</p>
              <p><strong>Total à payer:</strong> {facture.total} FCFA</p>
              <p><strong>Date de la transaction:</strong> {new Date(facture.date_transaction).toLocaleString()}</p>
            </div>
          </div>
        </div>
      )}

      </div>
      
    );
  }
