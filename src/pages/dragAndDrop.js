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
        url: "./logo192.png"
    },
    {
        id: 3,
        url: "./logo192.png"
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
        drop1: (item) => AddImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    const AddImageToBoard = (id) => {
        const pictureList = ItemList.filter((item) => id === item.id);

        // if (id === 1) {
             setBoard((board) => [...board, pictureList[0]]);
        // }
        // else if (id === 2) {
        //     setBoard2((board2) => [...board2, pictureList[0]]);
        // }
        // else if (id === 3) {
        //     setBoard3((board3) => [...board3, pictureList[0]]);
        // }


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
                <div className={styles.board2} ref={drop}>
                <h3>Board 2</h3>
                    {board.map((item) => {
                        return <ItemsDND key={item.id} url={item.url} id={item.id} />
                    })}
                </div>
                <div className={styles.board3} ref={drop}>
                <h3>Board 3</h3>
                    {board.map((item) => {
                        return <ItemsDND key={item.id} url={item.url} id={item.id} />
                    })}
                </div>

            </div>

        </>

    )
}

export default DragAndDrop