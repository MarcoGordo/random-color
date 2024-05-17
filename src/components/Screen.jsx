import React from "react";
import Button from "./Button";
import '../styles/screen.css';
import { useState } from "react";

export default function Screen() {

    const [color, setColor] = useState([1,0,0]);
    const [hex, setHex] = useState(true);

    const generateColor = () => {
        const max = 256;
        const coords = [Math.floor(Math.random() * max),
                        Math.floor(Math.random() * max),
                        Math.floor(Math.random() * max)];
        setColor([coords[0],coords[1], coords[2]]);
    }

    const generateHex = () => {
        setHex(true);
    }

    const generateRGB = () => {
        setHex(false);
    }

    return (
        <div id="Screen" style={{ backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})` }}>
            <div className="buttons-container">
                <Button colorCode={'Create HEX Color'} onClick={() => generateHex()} />
                <Button colorCode={'Create RGB Color'} onClick={() => generateRGB()} />
                <Button colorCode={'Generate Random Color'} onClick={() => generateColor()} />
            </div>
            <p>{hex ? `HEX: #${(color[0]).toString(16)}${(color[1]).toString(16)}${(color[2]).toString(16)}` 
                : `rgb(${color[0]},${color[1]},${color[2]})`}</p>
        </div>
    );
}
