import React,{useState} from 'react'

function Character(props) {
const [showHomeworld, setShowHomeworld] = useState(false)
const {name, homeworld} = props
function toggle() {
  setShowHomeworld(!showHomeworld)
}

  // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div className="character-card" onClick={toggle}>
      <h3 className="character-name">{name}</h3> 
    {showHomeworld && <p>Planet: <span className="character-planet">{homeworld}</span></p>}
    </div>
  )
}

export default Character;
