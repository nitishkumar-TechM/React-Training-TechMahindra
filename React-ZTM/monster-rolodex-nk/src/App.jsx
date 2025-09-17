import { useEffect, useState } from 'react'
import './App.css'
import CardList from './components/card-list/cardList';
import SearchBox from './components/search-box/searchBox';


function App() {
  const [monsters, setMonsters] = useState([])
  const [fiteredMonsters, setFilteredMonsters] = useState([]);
  console.log(monsters);
  

  useEffect(() => {
    //side effect of a pure function which makes its impure function 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setMonsters(data)
        setFilteredMonsters(data)
      })
  }, [])

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    const newFilteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchString));
    setFilteredMonsters(newFilteredMonsters);
  }

  return (
     <div className='app-container'>
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange}/>
      
      <CardList monsters={fiteredMonsters} />
    
      
    </div>
  )
}

export default App
