import React from "react";
import Image from "next/image";

const Section = () => {
  return (
    <div>
      <h2 className="font-['spiderfont'] text-6xl text-red-600 mt-20">
        CHARACTERS
      </h2>
      <div className="bg-gradient-to-r from-red-500 from-40% to-blue-700 to-90% p-8 mt-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="border-4 mr-15">
            <Image
              src={`/assets/peter-spiderman.jpg`}
              width={550}
              height={64}
              alt={`Logo`}
            />
          </div>
          <div className="w-1/2 pl-8">
            <h2 className="text-white text-left text-5xl justi font-semibold mb-4 font-['spiderfont']">
              PETER PARKER
            </h2>
            <p className="text-white">
              {" "}
              <strong>
                Peter Benjamin Parker es un antiguo estudiante de la Escuela de
                Ciencia y Tecnología de Midtown que, después de adquirir sus
                habilidades a causa de la mordida de una araña radiactiva,
                eligió combatir el crimen como el Hombre Araña.
              </strong>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-700 from-40% to-red-500 to-90% p-8 mt-2">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="w-1/2 pl-8">
            <h2 className="text-white text-left text-5xl justi font-semibold mb-4 font-['spiderfont'] ">
              MARY JANE
            </h2>
            <p className="text-white">
              {" "}
              <strong>
                Mary Jane es el único amor de la infancia y del instituto de
                Peter Parker. Por aquel entonces, salía con el deportista y
                matón del instituto, Flash Thompson. Era una de las únicas
                compañeras de Peter que no lo despreciaba por su inteligencia e
                incluso lo defendía siempre que podía.
              </strong>
            </p>
          </div>
          <div className="border-4 mr-15">
            <Image
              src={`/assets/mary-jane.png`}
              width={550}
              height={64}
              alt={`Logo`}
            />
          </div>
        </div>
      </div>

      <h2 className="font-['spiderfont'] text-6xl text-red-600 mt-20">
        VILLAINS
      </h2>

      <div className="bg-gradient-to-r from-purple-900 from-40% to-black to-90% p-8 mt-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="border-4 mr-15">
            <Image
              src={`/assets/venom.jpg`}
              width={550}
              height={64}
              alt={`Logo`}
            />
          </div>
          <div className="w-1/2 pl-8">
            <h2 className="text-white text-left text-5xl justi font-semibold mb-4 font-['spiderfont']">
              VENOM
            </h2>
            <p className="text-white">
              {" "}
              <strong>
                Es conocido por ser un simbionte alienígena que se fusiona con
                diferentes huéspedes humanos, creando una entidad súper poderosa
                y, a menudo, maligna.
              </strong>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-900 from-40% to-purple-700 to-90% p-8 mt-2">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="w-1/2 pl-8">
            <h2 className="text-white text-left text-5xl justi font-semibold mb-4 font-['spiderfont'] ">
              GREEN GOBLIN
            </h2>
            <p className="text-white">
              {" "}
              <strong>
                Norman Osborn parece tener una mente calculadora. Tiene una
                extrema aversión a que sus planes se frustren o se ejecuten de
                una manera que no es la que él había planeado.. Ha demostrado
                tener lujuria por el poder. En general, actúa como un psicópata.
              </strong>
            </p>
          </div>
          <div className="border-4 mr-15">
            <Image
              src={`/assets/green-goblin.jpg`}
              width={550}
              height={64}
              alt={`Logo`}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-600 from-20% to-yellow-400 to-90% p-8 mt-2">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="border-4 mr-15">
            <Image
              src={`/assets/electro.jpg`}
              width={550}
              height={64}
              alt={`Logo`}
            />
          </div>
          <div className="w-1/2 pl-8">
            <h2 className="text-white text-left text-5xl justi font-semibold mb-4 font-['spiderfont']">
              ELECTRO
            </h2>
            <p className="text-white">
              {" "}
              <strong>
                El reparador de líneas eléctricas Maxwell Dillon fue alcanzado
                por un rayo mientras arreglaba unos cables de alta tensión los
                cuales trabajaban con radioactividad, transformándolo en un
                condensador viviente, capaz de generar y almacenar energía.
                eléctrica.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
