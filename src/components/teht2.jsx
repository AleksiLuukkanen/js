import React, { useState } from "react";

function ArvaaNumero() {
    const [randomNumero, setRandomNumero] = useState(1);
    const [arvaus, setArvaus] = useState("");

    const arvoNumero = () => {
        const arvottuNumero = Math.floor(Math.random() * 10) + 1;
        setRandomNumero(arvottuNumero);

        if (parseInt(arvaus) === arvottuNumero) {
            alert("You guessed right!");
        } else {
            alert("You guessed wrong!");
        }
    };

    return (
        <form>
            <input
                type="number"
                value={arvaus}
                onChange={(e) => setArvaus(e.target.value)}
            />
            <button onClick={arvoNumero}>Guess Number</button>
        </form>
    );
}

export default ArvaaNumero;