import React from 'react'

const ItemHolder=({items, done})=> {
    let lis = []
    let mark = done === false ? '\u2713' : 'x';
    for(let i in items){
        if(items[i].completed === done){
          lis.push(<li key={i}>{items[i].item} 
            <span onClick={()=> action(i)}>{mark}</span></li>)
        }
      }
      return(<ul className="items"> {lis} </ul>  )
}
export default ItemHolder;