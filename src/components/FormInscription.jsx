import React from "react";

const FormInscription = () => {
  return (
    <>
      <form className="max-w-sm mx-auto  rounded-2xl bg-orange-500 bg-opacity-60 shadow-md">
        <h2 className="text-lg font-bold mb-5 bg-orange-600 text-white p-2 rounded-2xl w-full flex justify-center items-center">
          Contactez nous
        </h2>
        <div className="m-3">
          <input
            type="text"
            name="name"
            placeholder="Entrez votre nom"
            className="w-full p-1 border outline-0 rounded-2xl text-black"
            required
          />
        </div>
        <div className="m-3">
          <input
            type="tel"
            name="phone"
            placeholder="Entrez votre numéro de téléphone"
            className="w-full p-1 border outline-0 rounded-2xl text-black"
            required
          />
        </div>
        <div className="m-3">
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="entrez votre texte ici"
            className="w-full p-1 border outline-0 rounded-2xl text-black"
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="  bg-orange-600 text-white p-2 mb-4 rounded hover:bg-orange-700"
          >
            Valider
          </button>
        </div>
      </form>
      <span>En cours d'envoi</span>
    </>
  );
};

export default FormInscription;
