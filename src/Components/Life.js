import React, { useState, useEffect} from 'react'
import axios from 'axios'

function Life() {
    const [life, setLife] = useState([])
    
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
        .then(response => { 
            setLife(response.data.results)
        
        })
    })

        if(life){
            return (
                 life.map((life) => (
            <section>
                <div className="bg-color">
                <ul>
                    <img src = "https://picsum.photos/200/300?random" alt = "random img" width="200px" height="150x" />
                 <li key = {life}>
                    <h3>Name: {life.name}</h3>
                    <p>Gender: {life.gender}</p>
                    <p>height: {life.height}</p>
                    <p>mass: {life.mass}</p>
                    <p>hair_color: {life.hair_color}</p>
                    <p>skin_color: {life.skin_color}</p>
                    <p>eye_color: {life.eye_color}</p>
                    <p>homeworld: {life.homeworld}</p>
                    <p>species: {life.species}</p>

                    
                    
                 </li>
                 </ul>
                 
            </div>
            </section>
            
                   
                 ))
            )
           
        }

      return ( 
      
      <div>
            <p>{life}</p>
    </div>
    )
}

export default Life