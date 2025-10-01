"use client";
import React, { useState } from "react";

const CrimeLogic = ({ data }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="bg-gray-300 text-black m-20 p-10 rounded-xl">
      <h2 className="text-3xl font-bold my-5">Culpable Y logica del crimen</h2>

      {isHidden ? (
        <>
          <button
            className="bg-red-500 p-5 rounded-4xl text-white text-lg font-bold"
            onClick={() => setIsHidden(false)}
          >
            Mostrar culpable
          </button>
        </>
      ) : (
        <>
          <h3 className="text-red-500 font-bold text-3xl">
            {data.descripcion.Culpable}
          </h3>
          <p className="font-semibold text-lg">
            {data.descripcion["La Logica"]}
          </p>
        </>
      )}
    </div>
  );
};

export default CrimeLogic;
