"use client";

import CrimeAnalisys from "../CrimeAnalisys/CrimeAnalisys";
import Suspects from "../Suspects/Suspects";
import Link from "next/link";
import CrimeLogic from "../CrimeLogic/CrimeLogic";

const CaseViewer = (data:any) => {
  if (data) {
    return (
      <div className="flex flex-col h-full">
        <nav className="bg-red-500 p-3 felx text-center">
          <Link
            href="/home"
            className=" bg-gray-200 p-2 rounded-3xl font-bold text-red-500"
          >
            Volver
          </Link>
        </nav>
        <div>
          <CrimeAnalisys data={data.data["Analisis de la Escena del Crimen"]} />
          <Suspects data={data.data["Sospechosos"]} />
          <CrimeLogic data={data.data["El Culpable y la Logica del Crimen"]} />
        </div>
      </div>
    );
  }
};

export default CaseViewer;
