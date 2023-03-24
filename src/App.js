import './App.css';
import Cards from './Cards.js';
import { useState } from 'react';

function ShuffleCard(cards) {
  const ShuffleCard = [...cards]
  ShuffleCard.sort(() => Math.random() - 0.5); 
  return ShuffleCard;
}

function App() {
  const [cards, setcards] = useState(ShuffleCard([
    {id: 1, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088275098705866802/image.png',  matched: false, flipped: false},
    {id: 2, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088275098705866802/image.png',  matched: false, flipped: false},
    {id: 3, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088275098705866802/image.png',  matched: false, flipped: false},
    {id: 4, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088275098705866802/image.png',  matched: false, flipped: false},
    {id: 5, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088275098705866802/image.png',  matched: false, flipped: false},
    {id: 6, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088275098705866802/image.png',  matched: false, flipped: false},
    {id: 7, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088275098705866802/image.png',  matched: false, flipped: false},
    {id: 8, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088275098705866802/image.png',  matched: false, flipped: false},
    {id: 9, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088275098705866802/image.png',  matched: false, flipped: false},
    {id: 10, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088275098705866802/image.png',  matched: false, flipped: false},
    {id: 11, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088275098705866802/image.png',  matched: false, flipped: false},
    {id: 12, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088876991526223882/CardBack.png', cardfront: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088275098705866802/image.png',  matched: false, flipped: false},
  ]));

  const flipCard = (id) => {
    setcards(cards => cards.map(card => {
      return card.id === id ? { ...card, flipped: !card.flipped } : card;
    }));
  };

  return (
  <section className="game_board">
  <header className="App-header">
    <p>Card Memory Game</p>
    <table>
      <tbody>
        <div className="memory_card">
          <tr>
            <td>
              {cards.slice(0, 4).map((card) => (
                <Cards id={card.id} cardback={card.cardback} cardfront={card.cardfront} matched={card.matched} flipped={card.flipped} onClick={flipCard}/>
              ))}
            </td>
          </tr>
        </div>
        <div className="memory_card">
          <tr>
            <td>
              {cards.slice(4, 8).map((card) => (
                <Cards id={card.id} cardback={card.cardback} cardfront={card.cardfront} matched={card.matched} flipped={card.flipped} onClick={flipCard}/>
              ))}
            </td>
          </tr>
        </div>
        <div className="memory_card">
          <tr>
            <td>
              {cards.slice(8, 12).map((card) => (
                <Cards id={card.id} cardback={card.cardback} cardfront={card.cardfront} matched={card.matched} flipped={card.flipped} onClick={flipCard}/>
              ))}
            </td>
          </tr>
          </div>
        </tbody>
      </table>
    </header>
  </section>

  );

}
export default App;
