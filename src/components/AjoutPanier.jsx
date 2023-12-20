import { HiOutlineTrash } from "react-icons/hi";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const AjoutPanier = () => {
  const [counter, setCoutner] = useState(1);

  const augmenterQte = () => {
    setCoutner(counter + 1);
  };
  const reduireQte = () => {
    if (counter > 1) {
      setCoutner(counter - 1);
    }
  };
  return (
    <div className="flex flex-row">
      {counter == 1 ? (
        <div className="flex flex-row place-content-around bg-orange-fonce rounded-full items-center">
          <div className="bg-orange-reg rounded-full mr-2 p-2">
            <HiOutlineTrash onClick={reduireQte} className="text-4xl" />
          </div>
          <p className="text-4xl">{counter}x</p>
          <div className="bg-orange-reg rounded-full ml-2 p-2">
            <AiOutlinePlus onClick={augmenterQte} className=" text-4xl" />
          </div>
        </div>
      ) : (
        <div className="flex flex-row place-content-around bg-orange-fonce rounded-full items-center">
          <div className="bg-orange-reg rounded-full mr-2 p-2">
            <AiOutlineMinus onClick={reduireQte} className="text-4xl" />
          </div>
          <p className="text-4xl">{counter}x</p>
          <div className="bg-orange-reg rounded-full ml-2 p-2">
            <AiOutlinePlus onClick={augmenterQte} className=" text-4xl" />
          </div>
        </div>
      )}
    </div>
  );
};
export default AjoutPanier;
