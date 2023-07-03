'use client'
import CardsWeek from "./CardsWeek.jsx";
import  Principal  from "./Principal.jsx";
import Wind from "./Wind.jsx";
import Humedad from "./Humedad.jsx";
import Visibilidad from "./Visibilidad.jsx";
import AirPressure from "./AirPressure.jsx";


export default function Home() {
  return <main>
    <div className="tempBtn">
      <button>°C</button>
      <button>ºF</button>
    </div>
    <div className="week">
    <CardsWeek />
    <CardsWeek />
    <CardsWeek />
    <CardsWeek />
    <CardsWeek />
    </div>
    <h2 className="todays"><b>Today`s Hightlights</b></h2>
    <div className="infoCards">
      <Wind />
      <Humedad />
      </div>
      <div className="infoCards2">
      <Visibilidad />
      <AirPressure />
    </div>
    <Principal />
    
  </main>;
}
