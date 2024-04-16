import React, { useState } from 'react';

function NumberCheck() {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const CheckNumbers = () => {
    if (number === '') {
      setMessage('Syötä numero.');
      return;
    }
    
    const firstDigit = number[0];
    let allSame = true;
    for (let i = 1; i < number.length; i++) {
      if (number[i] !== firstDigit) {
        allSame = false;
        break;
      }
    }

    if (allSame) {
      setMessage('Kaikki numerot ovat samanlaisia.');
    } else {
      setMessage('Kaikki numerot eivät ole samanlaisia.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={handleChange}
        placeholder="Anna numero."
      />
      <button onClick={CheckNumbers}>Tarkista</button>
      <p>{message}</p>
    </div>
  );
}

export default NumberCheck;
