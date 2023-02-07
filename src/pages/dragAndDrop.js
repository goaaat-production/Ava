import React from 'react';
import ItemsDND from './itemsDND';
import { useState } from "react";
import { useDrop } from 'react-dnd';
import styles from './dragAndDrop.module.css'
const ItemList = [
    {
        id: 1,
        url: "./logo192.png"
    },
    {
        id: 2,
        url: "https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK"
    },
    {
        id: 3,
        url: "https://www.facebook.com/images/fb_icon_325x325.png"
    }
]

function DragAndDrop() {

    const [board, setBoard] = useState([

    ]);
    const [board2, setBoard2] = useState([

    ]);
    const [board3, setBoard3] = useState([

    ]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => AddImageToBoard(item.id,1),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))
    const [{ isOver2 }, drop2] = useDrop(() => ({
        accept: "image",
        drop: (item) => AddImageToBoard(item.id,2),
        collect: (monitor) => ({
            isOver2: !!monitor.isOver(),
        })
    }))
    const [{ isOver3 }, drop3] = useDrop(() => ({
        accept: "image",
        drop: (item) => AddImageToBoard(item.id,3),
        collect: (monitor) => ({
            isOver3: !!monitor.isOver(),
        })
    }))
    const AddImageToBoard = (itemId,boardId) => {
        const pictureList = ItemList.filter((item) => itemId === item.id); // récupère l'objet de l'ID = itemId
        console.log("itemId : ", itemId, " boardId : ",boardId);
        if (itemId === 1 & boardId === 1) {
            setBoard((board) => [...board, pictureList[0]]);
            ItemList.splice(itemId-1,1,"")
        }
        else if (itemId === 2 & boardId === 2) {
            setBoard2((board2) => [...board2, pictureList[0]]);
            ItemList.splice(itemId-1,1,"")
        }
        else if (itemId === 3 & boardId === 3) {
            setBoard3((board3) => [...board3, pictureList[0]]);
            ItemList.splice(itemId-1,1,"")
        }

        console.log("ItemList = ", ItemList)


    }
    return (
        <>
            <div className={styles.item}>
                {ItemList.map((item) => {
                    return <ItemsDND key={item.id} url={item.url} id={item.id} />
                })}
            </div>
            <div className={styles.boards}>
                <div className={styles.board1} ref={drop}>
                    <h3>Board 1</h3>
                    {board.map((item) => {
                        return <ItemsDND key={item.id} url={item.url} id={item.id} />
                    })}
                </div>
                <div className={styles.board2} ref={drop2}>
                <h3>Board 2</h3>
                    {board2.map((item) => {
                        return <ItemsDND key={item.id} url={item.url} id={item.id} />
                    })}
                </div>
                <div className={styles.board3} ref={drop3}>
                <h3>Board 3</h3>
                    {board3.map((item) => {
                        return <ItemsDND key={item.id} url={item.url} id={item.id} />
                    })}
                </div>

            </div>

        </>

    )
}

export default DragAndDrop