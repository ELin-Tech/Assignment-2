import { useState } from 'react';
import './App.css';

const Images = [
  {"src": "/images/BlobEmoji.png"},
  {"src": "/images/ConfusedEmoji.png"},
  {"src": "/images/CoolEmoji.jpg"},
  {"src": "/images/SadEmoji.png"},
  {"src": "/images/SillyEmoji.png"},
]

function App() {
  
  const [Playerturns, Turnupdate] = useState(0)
  const [CardStatus, Cardupdate] = useState([])
  
  const newCards = () => {
    const brandnewCards = [...Images, ...Images]
    .sort(() => Math.random() - .25)
    .map((newCard) => ({...newCard, id: Math.random()}))

    Turnupdate(0)
    Cardupdate(brandnewCards)
  }
  
  return (
    <div className="App">
      <h1>
        Welcome to my matching game!
      </h1>
      <button onClick={newCards}>
        Start a new game
      </button>
    </div>
  );
}


export default App;
