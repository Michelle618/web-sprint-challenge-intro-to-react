import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

// const planetUrl = 'http://localhost:9009/api/planets'
// const peopleUrl = 'http://localhost:9009/api/people'



  const App = () => {
    const [characters, setCharacters] = useState([]);
    console.log(characters)
  
    useEffect(() => {
      const fetchData = async() => {
        const [peopleResponse, planetsResponse] = await Promise.all([
          axios.get('http://localhost:9009/api/people'),
          axios.get('http://localhost:9009/api/planets')
        ]);
  
  
 const newPeople =  peopleResponse.data.map(person => {
    return {
      ...person, 
      homeworld: planetsResponse.data.find(planet => {
       return person.homeworld === planet.id

      })
    }
   })
setCharacters(newPeople)
      }
      fetchData()
       }, [])

      
        
    

        
        
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {characters.map(character => {
        return (
        <div key={character.id}>
        
        <Character name={character.name} homeworld={character.homeworld.name}/>
        </div>

   ) })}
      
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
