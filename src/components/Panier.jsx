import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import AjoutPanier from "./AjoutPanier";
import { motion } from "framer-motion";

const Panier = () => {
  const navigation = useNavigate();
  const retour = () => {
    navigation("/menu");
  };

  const facture = () => {
    navigation("/facture");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
      className="fiche-detail flex flex-col items-center bg-white h-screen font-cool"
    >
      <div className="entete bg-gris-fonce w-screen flex justify-center">
        <h2 className="text-4xl my-8 uppercase text-white tracking-wider">
          Panier
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
        className="payer-facture w-full absolute bottom-0 flex justify-center p-6 bg-gris-fonce"
        onClick={facture}
      >
        <p className="text-white text-4xl text-CoolCond">Payer la facture</p>
      </div>
    </motion.div>
  );
};
export default Panier;
