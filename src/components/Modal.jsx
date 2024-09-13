import React from "react";
import FormInscription from "./FormInscription"; // Remplacez par le bon chemin
import FormConnexion from "./FormConnection"; // Remplacez par le bon chemin

const Modal = ({ isOpen, onClose, formType }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative">
        <button onClick={onClose} className="absolute top-2 right-2 w-10">
          &times;
        </button>

        {formType === "inscription" ? <FormInscription /> : <FormConnexion />}
      </div>
    </div>
  );
};

export default Modal;
