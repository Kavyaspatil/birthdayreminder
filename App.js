import {useState} from "react"
import {data} from "./Sample"
function App(){
  const[people,setPeople]=useState(data)
  const removePerson=(id)=>{
    let newPerson=people.filter((person) => person.id!==id)
    setPeople(newPerson)
  }
  return(
    <>
    <h1>
      YOU HAVE {people.length} BIRTHDAYS TODAY!!
    </h1>
    {people.map ((person) => {const {id,name,age,country,image}=person
  return(
    <div className="container">
      <img src={image} alt={name} />
      <ul>
        <b ><li>{id}</li>
        <li>{name}</li>
        <li>{age}</li>
        <li>{country}</li></b>
      </ul>
      <button className="btn" onClick={() => removePerson(id)}>DISMISS</button>
    </div>
  )})}
    </>
  )

}
export default App