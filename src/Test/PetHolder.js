//Stateless file.
//This one doesn't work properly.

import React from 'react'

const PetHolder=({pets, petName, petBreed, action, addItem, inputRef})=> {
  let lis = []
  for(let i in pets){
    lis.push(<li key={i}>{pets[i].pet} 
        <span onClick={ ()=> action(i) }>{mark}</span></li>)
    }
  }

return (
    <section>
    <div>
      <ul>
        {this.state.pets.products.map((pet) => {
          return (
            <li key={pet.id}>
              <h3>{pet}</h3>
            </li>
          )
        })}
      </ul>
    </div>
  </section>
);				     
}
export default PetHolder;