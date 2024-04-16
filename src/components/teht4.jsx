import React, { useState } from 'react';

const LampotilaMuunnin = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const CelsiusUnit = (e) => {
    const celsiusValue = e.target.value;
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    setCelsius(celsiusValue);
    setFahrenheit(fahrenheitValue.toFixed(2));
  };

  const FahrenheitUnit = (e) => {
    const fahrenheitValue = e.target.value;
    const celsiusValue = (fahrenheitValue - 32) * 5/9;
    setFahrenheit(fahrenheitValue);
    setCelsius(celsiusValue.toFixed(2));
  };

  return (
    <div>
      <label>
        Celsius:
        <input
          type="number"
          value={celsius}
          onChange={CelsiusUnit}
        />
      </label>
      <br />
      <label>
        Fahrenheit:
        <input
          type="number"
          value={fahrenheit}
          onChange={FahrenheitUnit}
        />
      </label>
    </div>
  );
};

export default LampotilaMuunnin;
