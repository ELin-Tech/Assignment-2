import { useState } from 'react';
import './App.css';

const Images = [
  { "src": "/images/BlobEmoji.png" },
  { "src": "/images/ConfusedEmoji.png" },
  { "src": "/images/CoolEmoji.jpg" },
  { "src": "/images/SadEmoji.png" },
]

function App() {

  const [Playerturns, Turnupdate] = useState(0)
  const [CardStatus, Cardupdate] = useState([])

  const newCards = () => {
    const brandnewCards = [...Images, ...Images]
      .sort(() => Math.random() - .5)
      .map((newCard) => ({ ...newCard, id: Math.random() }))

    Turnupdate(0)
    Cardupdate(brandnewCards)
  }

  return (
    <div className="Intro">
      <h1>
        Welcome to my matching game!
      </h1>
      <button onClick={newCards}>
        Start a new game
      </button>
    <div className= "GameBoard">
      {CardStatus.map(newCard => (
        <div className= "CardonBoard" key={newCard.id}>
          <div>
            <img className= "CardFront" src={newCard.src} alt= "Front Pic"/>
            <img className= "CardBack" src="/images/CardCover.png" alt= "Back Pic"/>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}


export default App;
