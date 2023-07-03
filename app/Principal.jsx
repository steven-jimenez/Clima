"use client";
import {Raleway} from '@next/font/google'
import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from "next/image";


const font = Raleway({
weight: ["400", "700"]
});

export default function Principal() {
  const [clima, setClima] = useState([]);

  const getClima = () => {
    axios
      .get(
        "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&units=metric&appid=72ad3de835c66335bdf228f03b0406c0"
      )
      .then((res) => setClima(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getClima();
  }, []);

  const getClimaImage = () => {
    if (
      clima &&
      clima.current &&
      clima.current.weather &&
      clima.current.weather[0]
    ) {
      const iconCode = clima.current.weather[0].icon;
      switch (iconCode) {
        case "01d":
          return "/Clear.png";
        case "01n":
          return "/Clear.png";
        case "02d":
          return "/LightCloud.png";
        case "02n":
          return "/LightCloud.png";
        case "03d":
        case "03n":
        case "04d":
        case "04n":
          return "/HeavyCloud.png";
        case "09d":
        case "09n":
        case "10d":
        case "10n":
          return "/Shower.png";
        case "11d":
        case "11n":
          return "/Thunderstorm.png";
        case "13d":
        case "13n":
          return "/Snow.png";
        case "50d":
        case "50n":
          return "/HeavyCloud.png";
        default:
          return "/unknown.png";
      }
    } else {
      return "/unknown.png";
    }
  };

  const getTemperature = () => {
    if (clima && clima.current && clima.current.temp) {
      return Math.round(clima.current.temp);
    } else {
      return "";
    }
  };

  return (
    <main className="principal_page">
      <div className="botones_principal">
        <button className="btn1">Search for places</button>
        <button className="btn2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-geo"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
            />
          </svg>
        </button>
      </div>
      <div className="img_de_temp">
        <Image
          src={getClimaImage()}
          width={180}
          height={180}
          alt="clima image"
        />
      </div>

      <div className="tempPrincipal">{getTemperature()}°C</div>
    </main>
  );
}
