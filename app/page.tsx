"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className=" bg-black flex flex-col justify-around m-auto items-center p-10">
      <h2 className="text-7xl text-white text-center m-10">
        Investiga el Hecho
      </h2>
      <Link
        href="/home"
        className="bg-gray-900 p-5 rounded-2xl text-white m-10"
      >
        Comenzar
      </Link>
      <Link
        href="/info"
        className="bg-gray-900 p-5 rounded-2xl text-white m-10"
      >
        Informacion
      </Link>
    </div>
  );
}
