import React, { useState } from "react";
import Modal from "./Modal";
import Carousel from "./Caroussel"; // Importer le carrousel

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => {

    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  // Liste d'images pour le carrousel
  const images = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3",
  ];

  return (
    <div className="flex flex-col items-center justify-center  text-white text-center all">
      {/* Ajouter le carrousel au-dessus du contenu */}
      <Carousel images={images} />

      <h1 className="p-8 text-5xl font-bold">BRISE SERVICES</h1>
      <p className="text-center text-xl">
        Vous voulez en savoir plus sur la conception graphique, l'illustration,
        l'animation graphique,
        <br />
        l'interface utilisateur/UX, la photographie
      </p>
      <div className="flex gap-10 items-center justify-center bouton">
        <button
          className="mt-12 py-2 px-8 text-2xl rounded-full bg-orange-700"
          onClick={() => openModal("inscription")}
        >
          Contactez nous →
        </button>
        
      </div>
        
      <Modal isOpen={isModalOpen} onClose={closeModal}  />
    </div>
  );
};

export default Hero;