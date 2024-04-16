import React from "react";
import { useState } from "react";

function Laskeminen() {
    
    const [arvo1, uusiArvo1] = useState(0);
    const [arvo2, uusiArvo2] = useState(0);
    const [tulos, uusiTulos] = useState("");

    function Multiply() {
        const kertoma = arvo1 * arvo2
        uusiTulos(kertoma)
    }
    function Divide() {
        const jakauma = arvo2 / arvo1
        uusiTulos(jakauma)

    }
    return (
        <>
            <form>
                <input
                type="number"
                value={arvo1}
                onChange={(e) => uusiArvo1(e.target.value)}
                />
                <input
                type="number"
                value={arvo2}
                onChange={(e) => uusiArvo2(e.target.value)}
                />
                <button onClick={Multiply}>Multiply</button>
                <button onClick={Divide}>Divide</button>
                <p>Tulos: {tulos}</p>
            </form>
        </>
    );
}

export default Laskeminen;