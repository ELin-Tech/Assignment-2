import './Card.css'

export default function Card({ newCard, ClickedCard, selected, MaxSelect}) {
  const Clicked = () => {
    if (!MaxSelect){
      ClickedCard(newCard)
    }

  }
  return (
    <div className="CardonBoard" key={newCard.id}>
      <div className={selected ? "selected" : ""}>
        <img className="CardFront" src={newCard.src} alt="Front Pic" />
        <img className="CardBack" src="/images/asian_studies.png" onClick={Clicked} alt="Back Pic" />
      </div>
    </div>
  )
}