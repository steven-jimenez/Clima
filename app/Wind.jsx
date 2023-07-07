"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Wind() { 
  const [windSpeed, setWindSpeed] = useState(null);
  const [windDeg, setWindDeg] = useState(null);

  useEffect(() => { // se obtiene la velocidad y direccion del viento.
    const getWindData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&units=imperial&appid=72ad3de835c66335bdf228f03b0406c0"
        );
        const { current } = response.data; // esta es para redondear la respuesta obtenida.
        setWindSpeed(Math.round(current.wind_speed));
        setWindDeg(current.wind_deg);
      } catch (error) {
        console.error(error);
      }
    };

    getWindData();
  }, []);

  const rotateSVG = { // se usa para rotar la flechita.
    transform: `rotate(${windDeg}deg)`,
  };

  return (
    <main className="info">
      <p>Wind Status</p>
      <span className="speed">
        <p>
          <b>{windSpeed}</b>
        </p>{" "}
        mph
      </span>
      <span className="flecha">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
          style={rotateSVG}
        >
          <path d="m321-292 159-72 159 72 5-5-164-397-164 397 5 5ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
        </svg>
        <p>WSW</p>
      </span>
    </main>
  );
}
