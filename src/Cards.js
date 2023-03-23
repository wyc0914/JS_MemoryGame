function Cards({id, cardback, matched}) {
    return <td><img src={cardback}/></td>
}

const cards = document.querySelectorAll('game-board');

function flipCard() {
    console.log('clicked');
    console.long(this);
}
cards.forEach(cards => cards.addEventListener('click', flipCard));

export default Cards;