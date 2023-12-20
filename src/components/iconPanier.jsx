import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const IconPanier = () => {
  const naviagte = useNavigate();

  const onClickHandler = () => {
    naviagte("/panier");
  };
  return (
    <div
      className="fixed flex justify-center items-center right-5 bottom-20 text-white bg-jaune-fonce rounded-full p-2 w-16 h-16 z-50 xl:w-24 xl:h-24 "
      onClick={onClickHandler}
    >
      <MdOutlineShoppingCart className="text-4xl" />
    </div>
  );
};
export default IconPanier;
