import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BsCheckLg } from "react-icons/bs";
const NumDeCommande = () => {
  const nav = useNavigate();
  const retour = () => {
    nav("/menu");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
      className="num-de-commande flex flex-col items-center bg-white h-screen font-cool"
    >
      <div className="entete bg-gris-fonce w-screen flex justify-center">
        <h2 className="text-4xl my-8 uppercase text-white tracking-wider font-CoolCond">
          Numéro de commande
        </h2>
      </div>
      <main>
        <div className="animation flex items-center jsutify-center place-content-center">
          <motion.div
            className=" border-orange-pale border-4 border-dashed w-64 h-64 rounded-full my-16"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              ease: "linear",
              repeat: Infinity,
            }}
          ></motion.div>
          <motion.div
            className="absolute text-9xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <BsCheckLg></BsCheckLg>
          </motion.div>
        </div>
        <div className="wrapper-texte flex flex-col ">
          <div className="remerciement mb-6 -mt-4 flex justify-center">
            <p className="text-4xl font-CoolCond">
              Merci pour votre commande !!!
            </p>
          </div>
          <div className="texte-num -mb-4 flex justify-center mt-6">
            <p className="text-4xl font-CoolCond">Numéro de confirmation:</p>
          </div>
          <div className="num ">
            <p className="font-CoolCond" style={{ fontSize: "6rem" }}>
              #123-456-789
            </p>
          </div>
        </div>
      </main>
      <div
        onClick={retour}
        className="uppercase font-CoolCond retour w-full absolute bottom-0 flex justify-center p-6 bg-gris-fonce"
      >
        <p className="text-white text-4xl ">retour à l'accueil</p>
      </div>
    </motion.div>
  );
};
export default NumDeCommande;
