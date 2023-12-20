import { useLocation } from "react-router";
import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Detail = () => {
  const location = useLocation();
  const item = location.state;
  const navigation = useNavigate();

  const retour = () => {
    navigation("/menu");
  };
  const panier = () => {
    navigation("/panier");
  };
  console.log(item);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className="fiche-detail flex flex-col items-center bg-white h-screen font-cool xl:w-1/2 xl:mx-auto"
    >
      <div className="entete bg-rouge-pale w-screen flex justify-center xl:w-full xl:relative xl:bg-rouge-pale">
        <h2 className="text-4xl my-8 uppercase text-white tracking-wider ">
          Détail de l'item
        </h2>
        <CgClose
          onClick={retour}
          className="absolute text-white text-6xl top-6 right-6 xl:right-2"
        />
      </div>
      <div className="flex justify-center items-center my-4 w-11/12">
        <img
          src={item.img}
          alt={item.nom}
          style={{ height: "16em" }}
          className="rounded-3xl xl w-11/12 object-cover object-center"
        />
      </div>
      <div className="nom text-4xl justify-center mx-4 font-bold tracking-wider">
        {item.nom}
      </div>
      <div className="paragraphe m-4 ">{item.description}</div>
      <div
        onClick={panier}
        className="add bg-rouge-pale text-white w-screen flex justify-center fixed bottom-0 py-6 text-5xl xl:w-1/2 xl:bottom-0 xl:py-8 xl:text-5xl xl:bg-rouge-pale"
      >
        Ajouter au panier
      </div>
    </motion.div>
  );
};
export default Detail;
