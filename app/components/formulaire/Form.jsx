export function Form() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-lg md:text-2xl mt-6 font-bold text-[#3883A2] ">
        Formulaire de commande
      </h1>
      <form className="md:flex w-[90%] mt-4 m-auto md:justify-between max-sm:items-center max-sm:flex-col gap-4">
        {/* premier */}
        <div className=" md:w-[50%] w-full md:pl-8 gap-4 pl-2 pr-2 flex flex-col">
          <div className="flex flex-col gap-2">
            <label for="firstName">Nom</label>
            <input className="border-x-[3px] pl-4 bg-transparent border-y-[3px] md:w-[90%] md:h-14 h-8 w-full rounded-md border-[#3883A2]"></input>
          </div>
          <div className="flex flex-col gap-2">
            <label for="firstName">Prénom</label>
            <input className="border-x-[3px] pl-4 bg-transparent border-y-[3px] md:w-[90%] w-full md:h-14 h-8 rounded-md border-[#3883A2]"></input>
          </div>
          <div className="flex flex-col gap-2">
            <label for="firstName">
              Numero de transaction airtel money/mobi cash
            </label>
            <input className="border-x-[3px] pl-4 bg-transparent border-y-[3px] md:w-[90%] w-full md:h-14 h-8 rounded-md border-[#3883A2]"></input>
          </div>
          <div className="flex flex-col gap-2">
            <label for="firstName">Adresse</label>
            <input className="border-x-[3px] pl-4 bg-transparent border-y-[3px] md:w-[90%] w-full md:h-14 h-8 rounded-md border-[#3883A2]"></input>
          </div>
        </div>
        {/* deuxième */}
        <div className="md:w-[50%] w-full gap-4 flex max-sm:pl-2 max-sm:pr-2  flex-col">
          <div className="flex flex-col gap-2">
            <label for="firstName">Mode de livraison</label>
            <select  className="border-x-[3px] pl-4 bg-transparent border-y-[3px] md:w-[90%] w-full md:h-14 h-8 rounded-md border-[#3883A2]">
                <option disabled >rapide</option>
                <option value="standard">Livraison standard</option>
                <option value="standard">express</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label for="firstName">moyen de paiement</label>
            <select  className="border-x-[3px] pl-4 bg-transparent border-y-[3px] md:w-[90%] w-full md:h-14 h-8 rounded-md border-[#3883A2]">
                <option disabled >différent mode</option>
                <option value="standard">Airtel money</option>
                <option value="standard">mobi cash</option>
            </select>
          </div>
        </div>
      </form>
      <button type="submit" className="bg-[#3883A2] text-white w-[123px] rounded-md mt-8 mb-8 h-9 ">Soumettre</button>
    </div>
  );
}
