
import Dialogue from '../components/Dialogues'
import styles from './page1.module.css'
import Guide from '../components/Guides'



function Page1(){

    return(
        <>  
            <section className={styles.page}>
                <img className={styles.tableau} src='./lincendie-du-steamer-austria.png' alt='Tableau : incendie-du-steamer-austria'></img>
                <Dialogue dialogue="
                    :Matelot : Le pont est en feu !/ 

                    :Capitaine : Jetez les canaux à l’eau ! Les femmes et les enfants d’abord !/

                    :Matelot : Capitaine, le feu se propage !/ 

                    :Capitaine : Éteignez-moi ce feu !/

                    :Capitaine : Toi là, tu fais quoi ?
                "></Dialogue>
                
                <Guide contenu="Parlez au capitaine"></Guide>
            </section>
            
        </>
    )
}

export default Page1;