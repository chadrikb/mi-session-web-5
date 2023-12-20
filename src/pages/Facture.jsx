import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import AjoutPanier from "../components/AjoutPanier";
import { motion } from "framer-motion";

const Facture = () => {
  const navigation = useNavigate();
  const retour = () => {
    navigation("/menu");
  };

  const numCommande = () => {
    navigation("/num-de-commande");
  };
  const cancel = () => {
    navigation("/menu");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className="fiche-detail flex flex-col items-center bg-white h-screen font-cool"
    >
      <div className="entete bg-gris-fonce w-screen flex justify-center">
        <h2 className="text-4xl my-8 uppercase text-white tracking-wider font-CoolCond">
          Détail de la facture
        </h2>
        <CgClose
          onClick={retour}
          className="absolute text-white text-6xl top-6 right-6"
        />
      </div>
      <div className="items-panier flex flex-col place-content-evenly">
        <div className="item-panier flex flex-row w-screen my-6 items-center place-content-evenly mb-10">
          <p className="nom text-2xl w-1/3 font-CoolCond">
            Entrée de chips maison aux épices Boréales
          </p>
          <AjoutPanier />
          <p className="prix text-4xl font-butler font-medium">5,00$</p>
        </div>
        <div className="item-panier flex flex-row w-screen my-6 items-center place-content-evenly mb-10">
          <p className="nom text-2xl w-1/3 font-CoolCond">Boissons gazeuses</p>
          <AjoutPanier />
          <p className="prix text-4xl font-butler font-medium">3,00$</p>
        </div>
        <div className="item-panier flex flex-row w-screen my-6 items-center place-content-evenly mb-10">
          <p className="nom text-2xl w-1/3 font-CoolCond">
            3 Beignes de patates
          </p>
          <AjoutPanier />
          <p className="prix text-4xl font-butler font-medium">6,00$</p>
        </div>
      </div>
      <div
        onClick={numCommande}
        className="payer-facture w-full absolute bottom-0 flex flex-col justify-center pt-4 pb-48 px-10 bg-orange-pale rounded-t-3xl"
      >
        <div className="sous-total flex flex-row place-content-between w-full">
          <p className="font-butler font-bold text-4xl">Sous-total:</p>
          <p className="font-butler font-bold text-4xl">17,00$</p>
        </div>
        <div className="sous-total flex flex-row place-content-between w-full">
          <p className="font-butler font-light text-xl">TPS :</p>
          <p className="font-butler font-light text-xl">0,85$</p>
        </div>
        <div className="sous-total flex flex-row place-content-between w-full">
          <p className="font-butler font-light text-xl">TVQ :</p>
          <p className="font-butler font-light text-xl">1,69$</p>
        </div>
      </div>
      <div
        onClick={numCommande}
        className="payer-facture w-full absolute bottom-0 flex flex-row place-content-between pb-24 pt-4 px-10 bg-orange-fonce rounded-t-3xl"
      >
        <p className="font-butler font-bold text-4xl">Total:</p>
        <p className="font-butler font-bold text-4xl">19,54$</p>
      </div>
      <div className="absolute bottom-0 w-full flex flex-row">
        <div
          onClick={cancel}
          className="payer-facture w-1/2 flex justify-center py-2 px-8 bg-rouge-fonce rounded-t-3xl"
        >
          <p className="text-white font-CoolCond text-2xl">
            Annuler la commande
          </p>
        </div>
        <div
          onClick={numCommande}
          className="payer-facture w-1/2  flex justify-center py-2 px-8 bg-gris-fonce rounded-t-3xl"
        >
          <p className="text-white font-CoolCond text-2xl">Payer la commande</p>
        </div>
      </div>
    </motion.div>
  );
};
export default Facture;
