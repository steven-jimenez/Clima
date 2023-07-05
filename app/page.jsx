'use client'
import React from "react";
import CardsWeek from "./CardsWeek.jsx";
import Principal from "./Principal.jsx";
import Wind from "./Wind.jsx";
import Humedad from "./Humedad.jsx";
import Visibilidad from "./Visibilidad.jsx";
import AirPressure from "./AirPressure.jsx";

export default function Home() {
  return (
    <main>
      <section>
      <div className="principal">
      <Principal />
      </div>
      <div className="secondary">
      <div className="tempBtn">
        <button>°C</button>
        <button>ºF</button>
      </div>
      <div className="week">
        <CardsWeek day={1} /> 
        <CardsWeek day={2} /> 
        <CardsWeek day={3} /> 
        <CardsWeek day={4} /> 
        <CardsWeek day={5} /> 
      </div>
      <h2 className="todays">
        <b>Today's Highlights</b>
      </h2>
      <div className="infoCards">
        <Wind />
        <Humedad />
      </div>
      <div className="infoCards2">
        <Visibilidad />
        <AirPressure />
      </div>
      </div>
      </section>
    </main>
  );
}
