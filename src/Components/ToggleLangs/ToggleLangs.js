import React, { useContext } from "react";
import FrenchLang from "../../assets/france.svg";
import EnglishLang from "../../assets/united-kingdom.svg";
import SpanishLang from "../../assets/spain.svg";
import "./ToggleLangs.css";
import { Context } from "../../context/langContext";

const ToggleLangs = () => {
  const { toggleLang } = useContext(Context);
  return (
    <div className="container-langs">
      <img onClick={() => toggleLang("FR")} src={FrenchLang} />
      <img onClick={() => toggleLang("EN")} src={EnglishLang} />
      <img onClick={() => toggleLang("ES")} src={SpanishLang} />
    </div>
  );
};

export default ToggleLangs;
