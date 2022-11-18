import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import React from 'react';
import Kermit from './music/kermitdance.mp4'
const Images = [
  { "src": "/images/SillyEmoji.png", matched: false },
  { "src": "/images/HeartEmoji.jpg", matched: false },
  { "src": "/images/CoolEmoji.jpg", matched: false },
  { "src": "/images/MeltEmoji.jpg", matched: false },
  { "src": "/images/BlobEmoji.png", matched: false },
  { "src": "/images/ConfusedEmoji.png", matched: false },
  { "src": "/images/ThinkEmoji.png", matched: false },
  { "src": "/images/SmileEmoji.png", matched: false },
  { "src": "/images/SadEmoji.png", matched: false },
]
function App() {
  let music = new Audio("/kahoot.mp3")
  const start = () => {
    music.play()
  }

  const stop = () => {
    music.pause()
  }

  const [FirstSelect, FirstCardSelect] = useState(null)
  const [SecondSelect, SecondCardSelect] = useState(null)
  const [MaxSelect, MaxUpdate] = useState(null)
  const NewGame = () => {
    SecondCardSelect(null)
    FirstCardSelect(null)
    setTimeout(() => MaxUpdate(false), 20)
  }
  const [CardStatus, Cardupdate] = useState([])
  useEffect(() => {
    const both = FirstSelect && SecondSelect
    if (both) {
      MaxUpdate(true)
      if (FirstSelect.src === SecondSelect.src) {
        Cardupdate(LastCard => {
          return LastCard.map(newCard => {
            if (newCard.src === SecondSelect.src) {
              return { ...newCard, matched: true, }
            }
            else {
              return newCard
            }
          })
        })
        NewGame()
      }
      else {
        setTimeout(() => NewGame(), 1000)
      }
    }
  }, [FirstSelect, SecondSelect])
  const ClickedCard = (newCard) => {
    if (FirstSelect && SecondSelect) { return; }
    if (newCard.id === FirstSelect?.id) { return; }
    if (!SecondSelect) {
      FirstSelect ? SecondCardSelect(newCard) : FirstCardSelect(newCard)
    }

  }

  const newCards = () => {
    const brandnewCards = [...Images, ...Images]
      .sort(() => Math.random() - .5)
      .map((newCard) => ({ ...newCard, id: Math.random() }))

    Cardupdate(brandnewCards)
  }

  return (
    
    <div className="Intro">
      <video autoPlay loop muted style={{
        position: "absolute",
        width: "100%",
        left:"50%",
        top:"50%",
        height:1600,
        objectFit:"cover",
        transform:"translate(-50%, -50%)",
        zIndex:"-1"
      }}>
        <source src={Kermit} type="video/mp4"/>
      </video>
      <h1>
        Welcome to my matching game!
      </h1>
      <button onClick={newCards}>
        Start a new game
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={start}>
        Play some music
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={stop}>
        Stop music
      </button>
      <div className="GameBoard">
        {CardStatus.map(newCard => (
          <Card key={newCard.id} newCard={newCard} ClickedCard={ClickedCard} selected={newCard === SecondSelect || newCard === FirstSelect || newCard.matched} MaxSelect={MaxSelect}/>
        ))}
      </div>
    </div>
  );

}


export default App;
