import React from "react";
import { useState } from "react";

function Cards({id, cardback, cardfront, matched, flipped, onClick}) {
    const handleClick = () => {
        console.log(`Clicked on image with ID ${id}`);
        onClick(id);
    }
    return (
        <td>
          <img src={flipped ? cardfront : cardback} alt="card back" id={id} onClick={handleClick} />
        </td>
    );
}
  

  


export default Cards;