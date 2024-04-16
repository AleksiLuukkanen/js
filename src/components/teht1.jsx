import React from 'react';
import { useState, useEffect } from "react";

const today = new Date();

const kuukausi = today.getMonth()+1;
const vuosi = today.getFullYear();
const päivä = today.getDate();

const Päivämäärä = päivä + "/" + kuukausi + "/" + vuosi;

const Aika = () => {
    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  
    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        setTime({ hours, minutes, seconds });
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div>
        <p>Nykyinen päivämäärä: {Päivämäärä}</p>
        <p>Tämän hetkinen aika: {time.hours.toString().padStart(2, '0')}:{time.minutes.toString().padStart(2, '0')}:{time.seconds.toString().padStart(2, '0')}</p>
        
      </div>
    );
  };
  


export default Aika;