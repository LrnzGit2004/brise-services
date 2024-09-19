import React from "react";

const FormInscription = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("En cours d'envoi...");
    const formData = new FormData(event.target);

    formData.append("access_key", "a0f4a58d-bfa4-4ad5-9dc2-9de014490faa");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Envoyé !");

      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <form className="max-w-sm mx-auto  rounded-2xl bg-orange-500 bg-opacity-60 shadow-md relative" onSubmit={onSubmit}>
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
            type="email"
            name="mail"
            placeholder="Entrez votre adresse mail"
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
      <span className="block absolute">{result}</span>
    </>
  );
};

export default FormInscription;
