import React from 'react'
import { ReactP5Wrapper } from 'react-p5-wrapper'
import sketch from '../components/sketch'
import styles from './PagePeindre.module.css'

function PagePeindre() {
    return (
        <>
            <div className={styles.content} >
                <div className={styles.drawboard } id='test'>
                     <ReactP5Wrapper sketch={sketch} /> 
                </div>
                <button className={styles.buttonValider}>
                    Valider
                </button>

            </div>


        </>
    )
}

export default PagePeindre