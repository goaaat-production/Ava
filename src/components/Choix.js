import styles from '../components/choix.module.css'

function Choix(props){

    let contenus = props.contenu.split('/')

    return(
        <>
            <section className={(props.shown ? styles.wrapper : `${styles.wrapper} ${styles.hidden}`)}>
            {contenus.map((item, index) =>(
                <button key={index}>{item}</button>
            ))}
            </section>
        </>
    )
}

export default Choix;
