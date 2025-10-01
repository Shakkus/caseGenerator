import React from "react";

const CrimeAnalisys = ({ data }) => {
  console.log(data, "data desde crime analysis");

  return (
    <div className="text-black bg-gray-200 p-10">
      <h2 className="text-3xl font-bold my-5">Informe Preliminar</h2>
      <div>
        <h2 className="text-xl  my-5">Victima: {data.descripcion.Victima}</h2>

        <h3 className="text-lg font-bold">Escena del crimen</h3>
        <p className="py-5">{data.descripcion["Descripcion breve"]}</p>
        <div>
          <h3 className="text-xl font-semibold">Pistas Clave</h3>
          <ul>
            {data.descripcion["Pistas Clave"].map((pista,index) => (
              <li key={index} className="my-2"> - {pista}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CrimeAnalisys;
