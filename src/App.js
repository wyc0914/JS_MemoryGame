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

const newCards = () => [
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
];

function App() {
  const [cards, setcards] = useState(ShuffleCard(newCards()));

  function winCondition(cards) {
    return cards.every(card => card.matched);
  }
  
  //check the two selected cards for a matching cardfront, return true for a match and false otherwise
  function isMatch(cardId1, cardId2, cards) {
    const {cardfront: cardfront1} = cards.find(card => card.id === cardId1);
    const {cardfront: cardfront2} = cards.find(card => card.id === cardId2);
    return cardfront1 === cardfront2;
  }

  const [attempts, setAttempts] = useState(0);
  const [comparing, setComparing] = useState(false);

  const flipCard = (id) => {
    if (comparing) return;//click is disabled when two cards are comparing
    setcards((previousState) => previousState.map((card) => {
      return card.id === id ? {...card, flipped: !card.flipped} : card;
    }));
  
    setcards((previousState) => {
      const flippedCards = previousState.filter((card) => card.flipped && !card.matched);//filter out cards that is flipped and not matched
      if (flippedCards.length === 2) {
        setComparing(true);
        setAttempts((previousState) => previousState + 1);
        if (isMatch(flippedCards[0].id, flippedCards[1].id, previousState)) {//check the two flipped cards are matched
          setTimeout(() => {
          const newBoardState = previousState.map((card) => {
            if (card.id === flippedCards[0].id || card.id === flippedCards[1].id) {
              setComparing(false);
              return {...card, matched: true, flipped: false};//change matched to true and flipped to false
            } else {
              return card;
            }
          });

          if (winCondition(newBoardState)) {
            setTimeout(() => {
              alert("Congratulations!!, You WON!!!\n I know you’ve worked so hard for this!");
              newGame();
            }, 200);
          }
          setcards(newBoardState);
        }, 500);//Delay for matched card to stay visible

        } else {
          //two selected cards are not a match
          setTimeout(() => {
            setComparing(false);//clicking back after comparing
            setcards((previousState) => previousState.map((card) => {
              if (card.flipped && !card.matched) {
                return {...card, flipped: false};//set flipped to back to false if cards are not matched
              } else {
                return card;
              }
            }));
          }, 700);//delay time
        }
      }
      return previousState;
    });
  };

  const newGame = () => {
    setcards(ShuffleCard(newCards()));
    setComparing(false);
    setAttempts(0);
  };

  return (
    <section className="game_board">
      <header className="App-header">
        <p className="Title">Card Memory Game</p>
        <table>
          <tbody>
            <tr>
              <td className="newGameButton" colSpan="1">
                <button className='button' onClick={newGame}>New Game</button>
              </td>
              <td className="attemptCounter" colSpan="3">Attempts: {attempts}</td>
            </tr>
            <tr>
              {cards.slice(0, 4).map((card) => (
                <td className='cards'>
                  <Cards id={card.id} cardback={card.cardback} cardfront={card.cardfront} matched={card.matched} flipped={card.flipped} flipCard={flipCard}/>
                </td>
              ))}
            </tr>
            <tr>
              {cards.slice(4, 8).map((card) => (
                <td className='cards'>
                  <Cards id={card.id} cardback={card.cardback} cardfront={card.cardfront} matched={card.matched} flipped={card.flipped} flipCard={flipCard}/>
                </td>
              ))}
            </tr>
            <tr>
              {cards.slice(8, 12).map((card) => (
                <td className='cards'>
                  <Cards id={card.id} cardback={card.cardback} cardfront={card.cardfront} matched={card.matched} flipped={card.flipped} flipCard={flipCard}/>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </header>
    </section>
  );  
}
export default App;
