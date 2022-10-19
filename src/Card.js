import React from "react";
import './Card.css';
function Card(props){
    return (
        <div className="container">
            {Object.entries(props).map(e=><div>{e[0]}:{e[1]}</div>)}
        </div>
    )
}

export default Card;
