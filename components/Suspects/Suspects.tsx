import React from "react";

const Suspects = ({ data }) => {
  return (
    <div className="text-white p-10 ">
      <h2 className="text-3xl font-bold my-5">{data.titulo}</h2>
      <div>
        {data.descripcion.map((suspect,index) => (
          <div key={index} className="border-rose-400 border-2 my-5 p-5 rounded-3xl">
            <h3 className="text-red-500 text-lg font-bold italic">
              {suspect.nombre}
            </h3>
            <p>{suspect.perfil}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suspects;
