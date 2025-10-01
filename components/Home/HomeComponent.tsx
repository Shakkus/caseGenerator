import React from "react";
import Instructions from "../Instructions/Instructions";
import Link from "next/link";

const HomeComponent = () => {
  return (
    <div className="h-screen w-screen border-1 p-10 flex flex-col text-center text-white">
      <Instructions />
      <Link
        href="/case"
        className="bg-red-500 p-10 mx-auto rounded-4xl font-semibold transition hover:bg-red-700"
      >
        Generar Caso
      </Link>
      <Link
        href="/"
        className="bg-red-400 p-5 mx-auto my-10 rounded-xl font-black text-black"
      >
        Volver
      </Link>
    </div>
  );
};

export default HomeComponent;
