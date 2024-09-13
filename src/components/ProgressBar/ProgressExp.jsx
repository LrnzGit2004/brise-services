import React from "react";
import "./Progress.css";
import Counter from "./counter";

const ProgressExp = () => {
  return (
    <div className="container">
      <div className="skills">
        <div className="val">
          <h3 className="text-xl">Conception graphique</h3>
          <Counter percentValue={95} />
        </div>
        <div className="progress-bar">
          <div className="skill1 bg-orange-700"></div>
        </div>
        <div className="val">
          <h3 className="text-xl">Illustrations</h3>
          <Counter percentValue={90} />
        </div>
        <div className="progress-bar">
          <div className="skill2 bg-orange-700"></div>
        </div>
        <div className="val">
          <h3 className="text-xl">
            Interface utilisateur/ expérience utilisateur
          </h3>
          <Counter percentValue={85} />
        </div>
        <div className="progress-bar">
          <div className="skill3 bg-orange-700"></div>
        </div>
        <div className="val">
          <h3 className="text-xl">Montage vidéo</h3>
          <Counter percentValue={80} />
        </div>
        <div className="progress-bar">
          <div className="skill4 bg-orange-700"></div>
        </div>
        <div className="val">
          <h3 className="text-xl">Graphique animé</h3>
          <Counter percentValue={80} />
        </div>
        <div className="progress-bar">
          <div className="skill4 bg-orange-700"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressExp;
