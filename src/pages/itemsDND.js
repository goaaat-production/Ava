import React from 'react'
import { useDrag } from 'react-dnd'
import styles from './dragAndDrop.module.css';
function ItemsDND({id, url}) {
  const [{isDragging},drag] = useDrag(() => ({
    type: "image", 
    item: {id:id},
    
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }))
  return <img className = {styles.items} src={url} style={{border: isDragging ? "5px solid pink" : "0px"}} ref={drag}/>  

}

export default ItemsDND