import Card from "../card/card"
import './cardList.style.css'


const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
        {
            monsters.map(({name, email, id}, idx) => {
                return   (
                    <Card key={`${name}-${idx}`} name={name} email={email} id={id}/>
                )
            })
        }
     
    </div>
  )
}

export default CardList;