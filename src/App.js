import './App.css';
import Cards from './Cards.js';
import { useState } from 'react';

function ShuffleCard(cards) {
  let ShuffleCard = [];
  while (cards.length) {
    const randomIndex = Math.floor(Math.random() * cards.length);
    ShuffleCard.push(cards[randomIndex]);
    cards.splice(randomIndex, 1);
  }
  return ShuffleCard;
}

function App() {
  const [cards, setcards] = useState(ShuffleCard([
    {id: 1, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088274786620285018/image.png',  matched: false, flipped: false},
    {id: 2, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088274786620285018/image.png',  matched: false, flipped: false},
    {id: 3, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088274151594266664/image.png',  matched: false, flipped: false},
    {id: 4, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088274151594266664/image.png',  matched: false, flipped: false},
    {id: 5, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088274246498787398/image.png',  matched: false, flipped: false},
    {id: 6, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088274246498787398/image.png',  matched: false, flipped: false},
    {id: 7, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088274313494396938/image.png',  matched: false, flipped: false},
    {id: 8, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088274313494396938/image.png',  matched: false, flipped: false},
    {id: 9, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088274604256153690/image.png',  matched: false, flipped: false},
    {id: 10, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088274604256153690/image.png',  matched: false, flipped: false},
    {id: 11, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088274688268042377/image.png',  matched: false, flipped: false},
    {id: 12, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088274688268042377/image.png',  matched: false, flipped: false},
  ]));
  
  //check the two selected cards for a matching cardfront, return true for a match and false otherwise
  function isMatch(cardId1, cardId2, cards) {
    const {cardfront: cardfront1} = cards.find(card => card.id === cardId1);
    const {cardfront: cardfront2} = cards.find(card => card.id === cardId2);
    return cardfront1 === cardfront2;
  }

  const flipCard = (id) => {
    setcards((prevState) => prevState.map((card) => {
      return card.id === id ? { ...card, flipped: !card.flipped } : card;
    }));
  
    setcards((prevState) => {
      const flippedCards = prevState.filter((card) => card.flipped && !card.matched);//filter out cards that is flipped and not matched
      if (flippedCards.length === 2) {
        if (isMatch(flippedCards[0].id, flippedCards[1].id, prevState)) {//check the two flipped cards are matched
          return prevState.map((card) => {
            if (card.id === flippedCards[0].id || card.id === flippedCards[1].id) {
              return { ...card, matched: true, flipped: false };//change matched to true and flipped to false
            } else {
              return card;
            }
          });
        } else {
          //two selected cards are not a match
          setTimeout(() => {
            setcards((prevState) => prevState.map((card) => {
              if (card.flipped && !card.matched) {
                return { ...card, flipped: false };//set flipped to back to false if cards are not matched
              } else {
                return card;
              }
            }));
          }, 700);//delay time
        }
      }
      return prevState;
    });
  };

  return (
    <section className="game_board">
      <header className="App-header">
        <p className="Title">Card Memory Game</p>
        <table>
          <tbody>
            <tr>
              <td className="newGameButton">
                <button className='button' onClick={ShuffleCard}>New Game</button>
              </td>
            </tr>
            <tr>
              <td className="attemptCounter">Attempts:</td>
            </tr>
            <ul className="cards">
            <tr>
              <td>
                {cards.slice(0, 4).map((card) => (
                  <Cards id={card.id} cardback={card.cardback} cardfront={card.cardfront} matched={card.matched} flipped={card.flipped} flipCard={flipCard}/>
                ))}
              </td>
            </tr>
            <tr>
              <td>
                {cards.slice(4, 8).map((card) => (
                  <Cards id={card.id} cardback={card.cardback} cardfront={card.cardfront} matched={card.matched} flipped={card.flipped} flipCard={flipCard}/>
                ))}
              </td>
            </tr>
            <tr>
              <td>
                {cards.slice(8, 12).map((card) => (
                  <Cards id={card.id} cardback={card.cardback} cardfront={card.cardfront} matched={card.matched} flipped={card.flipped} flipCard={flipCard}/>
                ))}
              </td>
            </tr>
            </ul>
          </tbody>
        </table>
      </header>
    </section>
  );

}
export default App;
