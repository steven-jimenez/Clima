"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Principal() {
  const [clima, setClima] = useState(null);
  const [city, setCity] = useState("");
  const API_KEY = "72ad3de835c66335bdf228f03b0406c0";

  const getClima = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=sp, es&appid=${API_KEY}`
      )
      .then((res) => setClima(res.data))
      .catch((err) => console.error(err));
  };

  const getClimaImage = () => {
    if (
      clima &&
      clima.weather &&
      clima.weather.length > 0
    ) {
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

  const getTemperature = () => {
    if (clima && clima.main && clima.main.temp) {
      return Math.round(clima.main.temp);
    } else {
      return "";
    }
  };

  const getDescription = () => {
    if (
      clima &&
      clima.weather &&
      clima.weather.length > 0
    ) {
      return clima.weather[0].description;
    } else {
      return "";
    }
  };

  const getCurrentDate = () => {
    const date = new Date();
    const options = { weekday: "long", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  const getTimezone = () => {
    if (clima && clima.name) {
      return clima.name;
    } else {
      return "";
    }
  };

  const handleSearch = () => {
    getClima();
  };

  const handleSearchToggle = () => {
    setSearchVisible(!searchVisible);
  };

  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <main className="principal_page">
      <div className="botones_principal">
        <button className="btn1" onClick={handleSearchToggle}>
          Search for places
        </button>
        {searchVisible && (
          <div className="search">
            <div>
              <div className="close" onClick={handleSearchToggle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
              <input
                className="input"
                placeholder=" search location"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <button className="btnSearch" onClick={handleSearch}>
                <b>Search</b>
              </button>
            </div>
          </div>
        )}
        <button className="btn2">
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="30">
            <path d="M450-42v-75q-137-14-228-105T117-450H42v-60h75q14-137 105-228t228-105v-75h60v75q137 14 228 105t105 228h75v60h-75q-14 137-105 228T510-117v75h-60Zm30-134q125 0 214.5-89.5T784-480q0-125-89.5-214.5T480-784q-125 0-214.5 89.5T176-480q0 125 89.5 214.5T480-176Zm0-154q-63 0-106.5-43.5T330-480q0-63 43.5-106.5T480-630q63 0 106.5 43.5T630-480q0 63-43.5 106.5T480-330Zm0-60q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26Zm0-90Z" /></svg>

        </button>
      </div>
      <div className="img_de_temp">
        <Image
          src={getClimaImage()}
          width={200}
          height={200}
          alt="clima image"
        />
      </div>

      <div className="tempPrincipal">
        <span>
          {getTemperature()}
          <p>°C</p>
        </span>
      </div>

      <div className="descripcion">
        <span className="prDescripcion">{getDescription()}</span>
      </div>

      <div className="fecha">
        <span>
          Hoy <p>/</p>
          {getCurrentDate()}
        </span>
      </div>

      <div className="location">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          {getTimezone()}
        </span>
      </div>
    </main>
  );
}
