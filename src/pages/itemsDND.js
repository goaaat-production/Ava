import React from 'react'
import { useDrag } from 'react-dnd'

function ItemsDND({id, url}) {
  const [{isDragging},drag] = useDrag(() => ({
    type: "image", 
    item: {id:id},
    
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }))
  return <img src={url} width="150px" style={{border: isDragging ? "5px solid pink" : "0px"}} ref={drag}/>  

}

export default ItemsDND