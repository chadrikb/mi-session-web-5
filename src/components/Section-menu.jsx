import PropTypes from "prop-types";
import FicheMenu from "./FicheMenu";
import TitreSection from "./TitreSection";
import { useState } from "react";

const SectionMenu = ({ section }) => {
  const [isChildValue, setChildValue] = useState(false);
  const receiveChildValue = (value) => {
    setChildValue(value);
    // console.log(value);
  };
  const liste = section.items.map((item, i) => {
    return isChildValue ? <FicheMenu key={i} item={item} /> : null;
  });

  return (
    <section className="w-11/12 m-auto mt-9">
      <TitreSection
        nomcat={section.nomCategorie}
        sendValueToParent={receiveChildValue}
        fond={section.fond}
      />
      <div className="items flex flex-col xl:flex-row xl:flex-wrap">
        {liste}
      </div>
    </section>
  );
};
SectionMenu.propTypes = {
  section: PropTypes.object.isRequired,
};

export default SectionMenu;
