
function Choix(props){

    let contenus = props.contenu.split('/')

    return(
        <>
            {contenus.map((item, index) =>(
                <button key={index}>{item}</button>
            ))}
            
        </>
    )
}

export default Choix;
