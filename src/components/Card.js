import './Card.css'

export default function Card({newCard}) {
    return(
        <div className= "CardonBoard" key={newCard.id}>
          <div>
            <img className= "CardFront" src={newCard.src} alt= "Front Pic"/>
            <img className= "CardBack" src="/images/CardCover.png"  alt= "Back Pic" onClick={Clicked}/>
          </div>
        </div>
    )
}