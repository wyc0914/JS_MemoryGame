import './App.css';
import Cards from './Cards.js';
import { useState } from 'react';

function App() {
  const [cards, setcards] = useState([
    {id: 1, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088278674937233489/image.png', matched: false},
    {id: 2, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088278674937233489/image.png', matched: false},
    {id: 3, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088278674937233489/image.png', matched: false},
    {id: 4, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088278674937233489/image.png', matched: false},
    {id: 5, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088278674937233489/image.png', matched: false},
    {id: 6, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088278674937233489/image.png', matched: false},
    {id: 7, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088278674937233489/image.png', matched: false},
    {id: 8, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088278674937233489/image.png', matched: false},
    {id: 9, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088278674937233489/image.png', matched: false},
    {id: 10, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088278674937233489/image.png', matched: false},
    {id: 11, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088278674937233489/image.png', matched: false},
    {id: 12, cardback: 'https://cdn.discordapp.com/attachments/1077038540359221258/1088278674937233489/image.png', matched: false},
  ]);

  return (
    <div class = "game_board">
      <header className = "App-header">
        <table>
          <tr>
            <td>
              {cards.slice(0, 4).map((cards) => (
                <Cards key={cards.id} cardback={cards.cardback} matched={cards.matched}/>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              {cards.slice(4, 8).map((cards) => (
                <Cards key={cards.id} cardback={cards.cardback} matched={cards.matched}/>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              {cards.slice(8, 12).map((cards) => (
                <Cards key={cards.id} cardback={cards.cardback} matched={cards.matched}/>
              ))}
            </td>
          </tr>
        </table>
      </header>
    </div>
  );

}
export default App;
