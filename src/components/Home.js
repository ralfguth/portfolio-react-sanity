import React from "react";
import image from "../montanhas.jpg";

export default function Home() {
   return (
      <main>
         <img src={image} alt="Montanhas" className="absolute object-cover w-full h-full"/>
         <section className="relative flex justify-center min-h-screen pt-12 ">
            <h1>Olá. Eu sou Ralf</h1>
         </section>
      </main>
   )
};
