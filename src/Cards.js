import React from "react";
import './style.css';

function Cards({id, cardback, cardfront, matched, flipped, flipCard}) {
    const handleClick = (card) => {
        flipCard(id);
    }

    return (
        <img className={`Card ${matched ? "matched" : ""}`} src={flipped || matched ? cardfront : cardback} alt="card" id={id} onClick={handleClick}/>
    );
}
  
export default Cards;