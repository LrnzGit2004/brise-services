import React, { useState } from "react";

const FormInscription = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    contacts: "",
    email: "",
    password: "",
    checkPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez gérer l'envoi des données, par exemple avec une API
    console.log("Form Data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto  rounded-2xl bg-orange-500 bg-opacity-60 shadow-md "
    >
      <h2 className="text-lg font-bold mb-5 bg-orange-600 text-white p-2 rounded-2xl w-full flex justify-center items-center">
        Inscription
      </h2>

      <div className="m-3">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Entrez votre nom"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-1 border outline-0 rounded-2xl text-black"
          required
        />
      </div>
      <div className="m-3">
        <input
          type="text"
          id="surname"
          name="surname"
          placeholder="Entrez votre prénom"
          value={formData.surname}
          onChange={handleChange}
          className="w-full p-1 border outline-0 rounded-2xl text-black"
          required
        />
      </div>
      <div className="m-3">
        <input
          type="text"
          id="contacts"
          name="contacts"
          placeholder="Entrez vos contacts"
          value={formData.contacts}
          onChange={handleChange}
          className="w-full p-1 border outline-0 rounded-2xl text-black"
          required
        />
      </div>

      <div className="m-3">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Votre adresse mail"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-1 border outline-0 rounded-2xl text-black"
          required
        />
      </div>

      <div className="m-3">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Entrez votre mot de passe"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-1 border outline-0 rounded-2xl text-black"
          required
        />
      </div>
      <div className="m-3">
        <input
          type="password"
          id="checkPassword"
          name="checkPassword"
          placeholder="Confirmez votre mot de passe"
          value={formData.checkPassword}
          onChange={handleChange}
          className="w-full p-1 border outline-0 rounded-2xl text-black"
          required
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="  bg-orange-600 text-white p-2 mb-2 rounded hover:bg-orange-700"
        >
          Valider
        </button>
      </div>
    </form>
  );
};

export default FormInscription;
