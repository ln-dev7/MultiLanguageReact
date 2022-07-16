import React, { useContext } from "react";
import "./Contenu.css";
import data from "../../assets/data.js";
const Contenu = () => {
  return (
    <div className="content">
      <h1 className="title">{data['FR'].title}</h1>
      <p className="content-txt"></p>
    </div>
  );
};

export default Contenu;
