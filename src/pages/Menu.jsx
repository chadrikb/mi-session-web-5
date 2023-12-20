import SectionMenu from "../components/Section-menu";
import Header from "../components/Header";
import "./Menu.css";
import DBmenu from "../../DBMenu.js";
import IconPanier from "../components/iconPanier";
import { motion } from "framer-motion";

const Menu = () => {
  const liste = Object.keys(DBmenu).map((section, i) => {
    return <SectionMenu key={i} section={DBmenu[section]} />;
  });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
      className="flex flex-col justify-center items-center"
    >
      <Header />
      <h1 className="Titre-page mt-10 text-6xl font-cool text-orange-reg">
        Notre Menu
      </h1>
      {liste}
      <IconPanier />
    </motion.section>
  );
};

export default Menu;
