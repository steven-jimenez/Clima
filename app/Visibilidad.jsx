import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Visibilidad() {
  const [visibility, setVisibility] = useState(null);

  useEffect(() => {
    const getVisibilityData = async () => {// se usa para obtener la visibilidad de la API
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&units=imperial&appid=72ad3de835c66335bdf228f03b0406c0'
        );
        const { current } = response.data;
        setVisibility(current.visibility);
      } catch (error) {
        console.error(error);
      }
    };

    getVisibilityData();
  }, []);

  const formatVisibility = (visibility) => {// se formatea para visualizarla de una manera redondeada.
    if (visibility !== null) {
      return visibility.toFixed(1);
    }
    return '';
  };

  return (
    <main className="info">
      <p>Visibility</p>
      <span className="visibility">{formatVisibility(visibility)} <p className='millas'>miles</p></span>
    </main>
  );
}
