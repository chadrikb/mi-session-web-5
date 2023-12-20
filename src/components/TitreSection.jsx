import { AiOutlineCaretDown } from "react-icons/ai";
import { useState } from "react";
import "./titre-section.css";
const TitreSection = ({ nomcat, sendValueToParent, fond }) => {
  const [open, setOpen] = useState(true);

  const toggleButton = () => {
    {
      setOpen(!open);
      sendValueToParent(open);
    }
  };

  const fondClass = `bg-${fond}`;
  const fondBreuv = "bg-fond-breuvage";
  const fondEntree = "bg-fond-entree";
  const fondPlats = "bg-fond-plats";
  const fondDessert = "bg-fond-dessert";
  console.log(fondClass + " class");
  console.log(fondBreuv + " breuv");
  console.log(fondEntree + " entree");
  console.log(fondPlats + " plats");
  console.log(fondDessert + " dessert");
  // si je mets pas les logs et les const mes images load pas...
  return (
    <div
      className={`titre-section flex flex-row ${fondClass}
       bg-cover bg-right m-auto place-content-between items-center`}
      style={{ height: "100px" }}
    >
      <h2 className="titre h-16 flex justify-center items-center text-rouge-pale ml-4 text-4xl">
        {nomcat}
      </h2>

      <AiOutlineCaretDown
        className={
          open
            ? "text-rouge-pale text-5xl -rotate-90 mr-8 transition-transform duration-500 ease-in-out "
            : "text-rouge-pale text-5xl mr-8 transition-transform duration-500 ease-in-out"
        }
        onClick={toggleButton}
      />
    </div>
  );
};
export default TitreSection;
// ${fondClass}
