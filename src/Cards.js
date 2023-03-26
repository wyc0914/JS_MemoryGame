import React from "react";

function Cards({id, cardback, cardfront, matched, flipped, flipCard}) {
    const handleClick = (card) => {
        console.log(`Clicked on image with ID ${id}`);
        flipCard(id);
    }

    return (
        <td>
          <img src={flipped || matched ? cardfront : cardback} alt="card" id={id} onClick={handleClick} />
        </td>
    );
}
  
export default Cards;