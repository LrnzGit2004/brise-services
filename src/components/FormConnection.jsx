import React, { useState } from "react";

const FormConnection = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      <h2 className="text-lg font-bold mb-8 bg-orange-600 text-white p-3 rounded-2xl w-full flex justify-center items-center">
        Connexion
      </h2>

      <div className="m-4">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Votre adresse mail"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border outline-0 rounded-2xl text-black"
          required
        />
      </div>

      <div className="m-4">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Entrez votre mot de passe"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border outline-0 rounded-2xl text-black"
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

export default FormConnection;
