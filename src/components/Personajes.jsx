import React, { useEffect, useState } from "react";

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [personajeId, setPersonajeId] = useState("");

  const traerPersonajes = async () => {
    let response = await fetch("https://rickandmortyapi.com/api/character");
    let data = await response.json();
    setPersonajes(data.results);
  };

  useEffect(() => {
    traerPersonajes();
  }, []);

  return (
    <div>
      <div className="header">
        <h2>Rick <span>and</span> Morty</h2>
        <form action="">
          <input
            onChange={(e) => setPersonajeId(e.target.value)}
            type="search"
            id="buscador"
            placeholder="Escriba un número entre 1 y 20"
          />
        </form>
      </div>
      {/* --------------------- tarjetas ----------------------------- */}
      <div className="contenedor">
        {/* {
        personajes.map(personaje => (
          <div key={personaje.id} className="tarjeta">
            <img src={personaje.image} alt="" className="imagen" />
            <h2 className="name">{personaje.name}</h2>
          </div>
        ))
        }
        ; */}
        {personajes
          .filter((charcter) => charcter.id == personajeId)
          .map((filtered) => (
            <div key={filtered.id} className="tarjeta">
              <img src={filtered.image} alt="" className="imagen" />
              <h2 className="name">{filtered.name}</h2>
            </div>
          ))}
      </div>
      {/* --------------------------------------------------------------- */}
    </div>
  );
};

export default Personajes;
