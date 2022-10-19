import React from "react";
import './Card.css';
function Card(props){
    return (
        <div className="container">
            {Object.entries(props).map(e=><div><span className="titles">{e[0].toUpperCase()}</span>:<span className="values">{e[1]}</span></div>)}
        </div>
    )
}

export default Card;
