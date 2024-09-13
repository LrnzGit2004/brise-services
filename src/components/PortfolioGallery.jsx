import React, { useState } from "react";
import { images } from "../assets/assets"; //import du tableau d'images

const categories = ["Couvertures", "Flyers", "Illustrations", "Logos"];

const PortfolioGallery = () => {
  const [selectedCategorie, setSelectedCategorie] = useState("Couvertures");

  const filterImages = images.filter(
    (images) => images.categorie === selectedCategorie
  );

  return (
    <div>
      <div className="p-4">
        {/* Menu dees catégories */}

        <div className="sm:flex space-x-4 mb-4 items-center justify-center ">
          {categories.map((categorie) => (
            <button
              key={categorie}
              className={`px-4 py-2 font-semibold rounded-2xl transition text-white ${
                selectedCategorie === categorie
                  ? "bg-orange-600"
                  : "bg-transparent"
              }`}
              onClick={() => setSelectedCategorie(categorie)}
            >
              {categorie}
            </button>
          ))}
        </div>
        {/* Affichage des images en fonction de la catégories */}
        {selectedCategorie === "Couvertures" ? ( //si la catégorie sélectionnée est 'couverture'
          <div className="flex flex-col space-y-4 justify-center">
            {filterImages.map((images) => (
              <div key={images.id} className="w-full flex justify-center">
                <img
                  src={images.url}
                  alt=""
                  className="w-auto h-auto max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-col-3 lg:grid-cols-4 gap-5">
            {filterImages.map((images) => (
              <div key={images.id} className=" overflow-hidden">
                <img
                  className="h-auto w-auto object-contain"
                  src={images.url}
                  alt=""
                />
              </div>
            ))}
          </div>
        )}

        {/* Affichage des images filtrées */}
      </div>
    </div>
  );
};

export default PortfolioGallery;
