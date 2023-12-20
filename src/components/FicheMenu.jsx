import { BsPlus } from "react-icons/bs";
import "./fiche-menu.css";
import { useNavigate } from "react-router";

const FicheMenu = ({ item }) => {
  const { nom, img, prix, description, Slug } = item;
  const navigate = useNavigate();
  const toDetail = () => {
    console.log(item);
    navigate(`/detail/${item.Slug}`, { state: item });
  };
  // console.log(item);
  return (
    <div className="fiche-menu flex flex-col relative w-11/12 m-auto mt-6 items-center justify-center rounded-3xl shadow-2xl xl:w-5/12 xl:mx-8">
      <div
        className="image relative flex items-start"
        style={{ width: "100%" }}
        onClick={toDetail}
      >
        <img
          src={img}
          alt={nom}
          style={{ height: "20em" }}
          className="relative object-cover object-center justify-start items-center flex w-full h-full rounded-t-3xl"
        />
        <BsPlus className="ajout absolute right-8 bottom-4 text-5xl rounded-full bg-jaune-reg text-white" />
      </div>
      <div className="info-item relative flex flex-row h-18 w-full items-center  place-content-between p-5 font-butler text-2xl font-medium">
        <p className="nom-item justify-start w-3/4 ">{nom}</p>
        <p className="prix justify-end">{prix}</p>
      </div>
    </div>
  );
};
export default FicheMenu;

/*
    const menu = Object.keys(data.menu).map(({nom,img,prix,desc}, i)=>{
        return FicheMenu key={i}

        .find te retourne suelemecnt un élément 

        .filter te retroune un tableau d'element
    })
    */
