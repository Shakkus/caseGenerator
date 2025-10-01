import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="text-white text-center">
      <h2 className="text-5xl my-10">Informacion</h2>
      <p>
        Desde ya muchas gracias por utilizar mi aplicacion, la misma fue creada
        para poder repasar elementos basicos de NEXT.JS
      </p>
      <div>
        <Link href="/">Home</Link>
        <button>Linkedin</button>
      </div>
    </div>
  );
};

export default page;
