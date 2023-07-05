import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AirPressure() {
  const [pressure, setPressure] = useState(null);

  useEffect(() => {
    const getPressureData = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&units=metric&appid=72ad3de835c66335bdf228f03b0406c0'
        );
        const { current } = response.data;
        setPressure(current.pressure);
      } catch (error) {
        console.error(error);
      }
    };

    getPressureData();
  }, []);

  const formatPressure = (pressure) => {
    if (pressure !== null) {
      return pressure.toFixed(1);
    }
    return '';
  };

  return (
    <main className="info">
      <p>Air Pressure</p>
      <span className='visibility'>{formatPressure(pressure)} <p className='millas'>mb</p></span>
    </main>
  );
}
