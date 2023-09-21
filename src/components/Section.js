import React from "react";
import Image from "next/image";

const Section = () => {
  return (
    <div>
      <h2 className="font-['spiderfont'] text-6xl text-red-600 mt-20">
        CHARACTERS
      </h2>
      <div className="bg-gradient-to-r from-red-500 from-30% to-blue-800 to-90% p-8 mt-9 flex py-0">
        <div>
          <Image
            src={`/assets/spiderman-image2.png`}
            width={550}
            height={74}
            alt={`Logo`}
          />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="border-4 mr-15 mt-5">
            <Image
              src={`/assets/peter-parker.gif`}
              width={663}
              height={74}
              alt={`Logo`}
            />
          </div>
          <div>
            <h2 className="text-white text-left text-6xl justi font-semibold mb-4 mt-9 font-['spiderfont']">
              SPIDERMAN
            </h2>
            <p className="text-white">
              {" "}
              <strong>Nombre Completo:</strong> Peter Benjamin Parker
              <br></br>
              <strong>Alias:</strong> Spiderman
              <br></br>
              <br></br>
              <strong>Información:</strong>
              <br></br>
              Peter Benjamin Parker es un antiguo estudiante de la Escuela de
              Ciencia y Tecnología de Midtown que, después de adquirir sus
              habilidades a causa de la mordida de una araña radiactiva, eligió
              combatir el crimen como el Hombre Araña.
            </p>

            <button className="bg-blue-800 max-w-{120px} border-2 border-white border-solid text-white mt-9 py-2 px-12 rounded-3xl hover:bg-red-400">
              {" "}
              View Info{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-black from-10% to-red-600 to-90% p-8 mt-1 flex py-0">
        <div className="max-w-2xl mx-auto">
          <div className="border-4 mr-15 mt-7">
            <Image
              src={`/assets/miles-morales-1.gif`}
              width={663}
              height={74}
              alt={`Logo`}
            />
          </div>
          <div>
            <h2 className="text-white text-left text-6xl justi font-semibold mb-4 mt-9 font-['spiderfont']">
              SPIDERMAN
            </h2>
            <p className="text-white">
              {" "}
              <strong>Nombre Completo:</strong> Miles Gonzalo Morales
              <br></br>
              <strong>Alias:</strong> Spiderman
              <br></br>
              <br></br>
              <strong>Información:</strong>
              <br></br>
              Es un adolescente de ascendencia afroamericana y latina residente
              en Brooklyn; quien después de haber sido mordido por una araña
              genéticamente modificada diseñada por el némesis de Spider-Man,
              Norman Osborn, asumió la identidad de Spider-Man en el Universo
              Ultimate.
            </p>

            <button className="bg-black max-w-{120px} border-2 border-red-400 border-solid text-white mt-9 py-2 px-12 rounded-3xl hover:bg-red-400">
              {" "}
              View Info{" "}
            </button>
          </div>
        </div>
        <div className="flex-initial">
          <Image
            src={`/assets/Miles-morales-2.png`}
            width={550}
            height={74}
            alt={`Logo`}
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-black from-20% to-pink-500 to-90% p-8 mt-1 flex py-0">
        <div className="flex-initial">
          <Image
            src={`/assets/spider-gwen-2.png`}
            width={550}
            height={74}
            alt={`Logo`}
          />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="border-4 mr-15 mt-5">
            <Image
              src={`/assets/spider-gwen-1.gif`}
              width={663}
              height={74}
              alt={`Logo`}
            />
          </div>
          <div>
            <h2 className="text-white text-left text-6xl justi font-semibold mb-4 mt-9 font-['spiderfont']">
              SPIDER GWEN
            </h2>
            <p className="text-white">
              {" "}
              <strong>Nombre Completo:</strong> Gwendolyne Maxine Stacy
              <br></br>
              <strong>Alias:</strong> Spider Gwen
              <br></br>
              <br></br>
              <strong>Información:</strong>
              <br></br>
              Es la hija del Capitán George Stacy y una joven estudiante, amante
              de la música, que fue picada por una araña radiactiva. Esto
              provocó que adquiriera poderes arácnidos. En un principio usa
              estas habilidades para su propio beneficio, pero luego de un
              combate, en el que muere Peter Parker, Gwen comprende que un gran
              poder conlleva una gran responsabilidad.
            </p>

            <button className="bg-pink-600 max-w-{120px} border-2 border-white border-solid text-white mt-9 py-2 px-12 rounded-3xl hover:bg-pink-300">
              {" "}
              View Info{" "}
            </button>
          </div>
        </div>
      </div>

      <h2 className="font-['spiderfont'] text-6xl text-red-600 mt-20">
        VILLAINS
      </h2>

      <div className="bg-gradient-to-r from-purple-900 from-20% to-black to-90% p-8 mt-1 flex py-0">
        <div className="flex-initial">
          <Image
            src={`/assets/Venom-7.png`}
            width={550}
            height={74}
            alt={`Logo`}
          />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="border-4 mr-15 mt-5">
            <Image
              src={`/assets/venom-gif.gif`}
              width={663}
              height={74}
              alt={`Logo`}
            />
          </div>
          <div>
            <h2 className="text-white text-left text-6xl justify- font-semibold mb-2 mt-9 font-['spiderfont']">
              VENOM
            </h2>
            <p className="text-white">
              {" "}
              <strong>Nombre Completo:</strong> Edward Charles Allan Brock
              <br></br>
              <strong>Alias:</strong> Venom
              <br></br>
              <br></br>
              <strong>Información:</strong>
              <br></br>
              Era un periodista respetable del Daily Globe, competidor del
              periódico Daily Bugle, que consolidó su carrera profesional cuando
              empezó a escribir una serie de artículos polemicos. ras perderlo
              todo, se unió al simbionte alienígena después de ser descartado
              por Spider-Man, convirtiéndose en el primer Venom.
            </p>

            <button className="bg-black max-w-{120px} border-2 border-purple-800 border-solid text-white mb-5 mt-5 py-2 px-12 rounded-3xl hover:bg-purple-400">
              {" "}
              View Info{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-900 from-40% to-purple-700 to-90% p-8 mt-1 flex py-0">
        <div className="max-w-2xl mx-auto">
          <div className="border-4 mr-15 mt-7">
            <Image
              src={`/assets/green-goblin3.gif`}
              width={663}
              height={74}
              alt={`Logo`}
            />
          </div>
          <div>
            <h2 className="text-white text-left text-6xl justi font-semibold mb-4 mt-9 font-['spiderfont']">
              GREEN GOBLIN
            </h2>
            <p className="text-white">
              {" "}
              <strong>Nombre Completo:</strong> Norman Osborn
              <br></br>
              <strong>Alias:</strong> Green Goblin
              <br></br>
              <br></br>
              <strong>Información:</strong>
              <br></br>
              Era un empresario corrupto y científico que intentó perfeccionar
              el Suero Super-Soldado de S.H.I.E.L.D, pero esta investigación
              luego lo llevó a convertirse en Green Goblin.
            </p>

            <button className="bg-purple-900 max-w-{120px} border-2 border-green-500 border-solid text-white mt-9 py-2 px-12 rounded-3xl hover:bg-purple-400">
              {" "}
              View Info{" "}
            </button>
          </div>
        </div>
        <div className="flex-initial">
          <Image
            src={`/assets/Green-goblin-4.png`}
            width={550}
            height={74}
            alt={`Logo`}
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-900 from-20% to-yellow-400 to-90% p-8 mt-1 flex py-0">
        <div className="flex-initial">
          <Image
            src={`/assets/Electro-2.png`}
            width={550}
            height={74}
            alt={`Logo`}
          />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="border-4 mr-15 mt-5">
            <Image
              src={`/assets/electro3.gif`}
              width={663}
              height={74}
              alt={`Logo`}
            />
          </div>
          <div>
            <h2 className="text-white text-left text-6xl justi font-semibold mb-4 mt-9 font-['spiderfont']">
              ELECTRO
            </h2>
            <p className="text-white">
              {" "}
              <strong>Nombre Completo:</strong> Maxwell Dillon
              <br></br>
              <strong>Alias:</strong> Electro
              <br></br>
              <br></br>
              <strong>Información:</strong>
              <br></br>
                El reparador de líneas eléctricas Maxwell Dillon fue alcanzado
                por un rayo mientras arreglaba unos cables de alta tensión los
                cuales trabajaban con radioactividad, transformándolo en un
                condensador viviente, capaz de generar y almacenar energía.
                eléctrica.
            </p>

            <button className="bg-green-900 max-w-{120px} border-2 border-yellow-300 border-solid text-white mt-9 py-2 px-12 rounded-3xl hover:bg-green-300">
              {" "}
              View Info{" "}
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Section;
