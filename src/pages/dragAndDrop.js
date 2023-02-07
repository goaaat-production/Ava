import React from 'react'
import ItemsDND from './itemsDND'
const ItemList = [
    {
        id : 1,
        url : "./logo192.png"
    },
    {
        id : 2,
        url : "./logo192.png"
    },
    {
        id : 3,
        url : "./logo192.png"
    }
]

function dragAndDrop() {
  return (
    <>
        <div className='Items'> {ItemList.map((item) => {
            return <ItemsDND key={item.id} url={item.url} id={item.id} />
        })}</div>
        <div className='Placeholders'></div>
    </>

  )
}   

export default dragAndDrop