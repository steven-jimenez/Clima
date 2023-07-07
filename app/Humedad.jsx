import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Humedad() {
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    const getHumidityData = async () => { // se usa para obtener la humedad.
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&units=metric&appid=72ad3de835c66335bdf228f03b0406c0'
        );
        const { current } = response.data;
        setHumidity(current.humidity);
      } catch (error) {
        console.error(error);
      }
    };

    getHumidityData();
  }, []);

  return (
    <main className="info">
      <p>Humidity</p>
      <span className='humidity'>{humidity}<p>%</p></span>
      <div className='progreso'>
        <div className='porcentaje'>
        <p>0%</p>
        <p>50%</p>
        <p>100%</p>
        </div>
        <div className='barra'>
          <div className="sombreado" style={{
            backgroundColor:"#FFEC65", height: "100%",borderRadius: "15px",
            width:`${humidity}%`}}></div>
        </div>
      </div>
     </main>
  );
}
