function CharacterItem(props){
    return(
        <li >
            <a href="#">
                <img 
                src={props.element.image}
                alt={`Foto de ${props.element.name}`}
                title={`Foto de ${props.element.name}`}/>
                <section>
                    <h2>Nombre:{props.element.name}</h2>
                    <p>Especie: {props.element.species}</p>
                </section>
                
            </a>
        </li>
    )
}
export default CharacterItem;