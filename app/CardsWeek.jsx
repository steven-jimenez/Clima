"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

export default function CardsWeek({ day }) {
  const [clima, setClima] = useState(null);
  const [city, setCity] = useState("");
  const API_KEY = "72ad3de835c66335bdf228f03b0406c0";
  useEffect(() => {
    const getClima = () => {  // esta es para obtener los datos de los proximos dias y usa props "day" para identificar que dia.
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + day);

      const tomorrowDateString = tomorrow.toLocaleDateString("en-US", { // esta es para obtener la fecha.
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&units=metric&exclude=current,minutely,hourly,alerts&appid=72ad3de835c66335bdf228f03b0406c0`
        )
        .then((res) => {
          const weatherData = res.data.daily[day]; // aqui se obtienen los datos de la API y usa la props "day".
          setClima(weatherData);
        })
        .catch((err) => console.error(err));
    };

    getClima();
  }, [day]);

  const getClimaImage = () => {
    if (clima && clima.weather && clima.weather[0]) {
      const iconCode = clima.weather[0].icon;
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

  const getTemperature = () => { // se obtiene la temperatura con la prop "day".
    if (clima && clima.temp && clima.temp.day) {
      return Math.round(clima.temp.day);
    } else {
      return "";
    }
  };

  const getFormattedDate = (offset) => { // se usa para formatear la fecha apartir de la prop.
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + offset);

    const options = { weekday: "short", month: "short", day: "numeric" };
    return currentDate.toLocaleDateString(undefined, options);
  };

  return (
    <main className="CardsW">
      <div className="fechaCard">
        <span>{getFormattedDate(day)}</span>
      </div>

      <div className="imageCard">
        <Image src={getClimaImage()} width={70} height={70} alt="clima image" />
      </div>

      <div className="tempCard">
        <span>
          {getTemperature()}
          <p>°C</p>
        </span>
      </div>
    </main>
  );
}
