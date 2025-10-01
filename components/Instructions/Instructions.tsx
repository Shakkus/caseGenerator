import React from "react";

const Instructions = () => {
  return (
    <>
      <h2 className="text-3xl m-10 font-bold">Instrucciones</h2>
      <ul className="m-10 mx-auto text-start">
        <li>
          En el juego deberas investigar, quien ha asesinado a la victima de la
          historia.
        </li>
        <li>
          Piensa en las pistas, los rastros y las huellas que se pudieron
          encontrar en la escena del crimen
        </li>
        <li>
          Debes revelar al asesino una vez ya tengas en mente quien pudo ser el
          asesino.
        </li>
      </ul>
    </>
  );
};

export default Instructions;
