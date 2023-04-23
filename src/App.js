import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import React from 'react';
import Kermit from './music/kermitdance.mp4'
import Butterfly from './music/butterfly.mp4'
const Images = [
  { "src": "/images/Laundry.png", matched: false },
  { "src": "/images/Fred.jpg", matched: false },
  { "src": "/images/tweet.jpg", matched: false },
  { "src": "/images/wiz.jpg", matched: false },
  { "src": "/images/mbutterfly.jpg", matched: false },
  { "src": "/images/yellowfact.jpg", matched: false },
]
function App() {
  let music = new Audio("/california.mp3")
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
        height:1100,
        objectFit:"cover",
        transform:"translate(-50%, -50%)",
        zIndex:"-1"
      }}>
        <source src={Butterfly} type="video/mp4"/>
      </video>
      <h1>
        Asian Studies Matching Game!
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
