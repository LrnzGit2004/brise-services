import React, { useState } from "react";
import Modal from "./Modal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState("inscription"); // Par défaut à l'inscription

  const openModal = (type) => {
    setFormType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="mt-20 flex flex-col items-center justify-center text-white text-center all">
      <h2 className="text-4xl">Nous sommes</h2>
      <h1 className="pt-4 text-5xl font-bold">BRISE SERVICES</h1>
      <h3 className="pt-5 pb-20 text-2xl">Nous faisons dans l'illustration</h3>
      <p className="text-center text-xl">
        Vous voulez en savoir plus sur la conception graphique, l'illustrateur,
        l'animation graphique,
        <br />
        l'interface utilisateur/UX, la photographie
      </p>
      <div className="flex gap-10 items-center justify-center bouton">
        <button
          className="mt-12 py-2 px-8 text-2xl rounded-full bg-orange-700"
          onClick={() => openModal("inscription")}
        >
          S'inscrire
        </button>
        <button
          className="mt-12 py-2 px-8 text-2xl rounded-full bg-orange-700 connect"
          onClick={() => openModal("connexion")}
        >
          Se connecter
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} formType={formType} />
    </div>
  );
};

export default Hero;
