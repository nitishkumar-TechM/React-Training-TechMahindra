import { useEffect, useState } from 'react'
import './App.css'
import CardList from './components/card-list/cardList';


function App() {
  const [monsters, setMonsters] = useState([])
  console.log(monsters);
  

  useEffect(() => {
    //side effect of a pure function which makes its impure function 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, [])

  return (
    <>
      <CardList monsters={monsters} />
    
      
    </>
  )
}

export default App
