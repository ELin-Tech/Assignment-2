import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
const Images = [
  { "src": "/images/BlobEmoji.png", matched: false},
  { "src": "/images/ConfusedEmoji.png", matched: false },
  { "src": "/images/CoolEmoji.jpg", matched: false },
  { "src": "/images/SadEmoji.png", matched: false },
]

function App() {
  const [CardStatus, Cardupdate] = useState([])
  const [FirstSelect, FirstCardSelect] = useState(null)
  const NewGame=() => {
      Turnupdate(LastTurn => LastTurn + 1)
      SecondCardSelect(null)
      FirstCardSelect(null)

  }
  useEffect(() => {
    if (FirstSelect && SecondSelect) {
      if (FirstSelect.src === SecondSelect.src) {
        Cardupdate(LastCard => {
          return LastCard.map(newCard=> {
            if (newCard.src === SecondSelect.src){
              return {...newCard, matched:true}
            }
            else {
              return {...newCard, matched:false}
            }
          })
        } )
        NewGame()
      }
      else {
        NewGame()
      }
    }
  }, [FirstSelect, SecondSelect])
  const [Playerturns, Turnupdate] = useState(0)
  const [SecondSelect, SecondCardSelect] = useState(null)
  const ClickedCard = (newCard) => {
     FirstSelect ? SecondCardSelect(newCard) : FirstCardSelect(newCard)
  }

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
      <div className="GameBoard">
        {CardStatus.map(newCard => (
          <Card key={newCard.id} newCard={newCard} ClickedCard={ClickedCard}/>
        ))}
      </div>
    </div>
  );

  }


export default App;
