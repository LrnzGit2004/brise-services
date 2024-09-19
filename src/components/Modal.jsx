import React from "react";
import FormInscription from "./FormInscription"; // Remplacez par le bon chemin

const Modal = ({ isOpen, onClose, }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative">
        <button onClick={onClose} className="absolute z-10 bg-orange-700 text-xl top-2 right-2 w-10">
          &times;
        </button>

         <FormInscription /> 
      </div>
    </div>
  );
};

export default Modal;
