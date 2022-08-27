function CharacterDetail (props){
    return(
        <section>
            <img 
            src={props.character.image}
            alt={`Foto de ${props.character.name}`}
            title={`Foto de ${props.character.name}`}/>
            <section>
                <h2>Nombre:{props.character.name}</h2>
                <p>Especie: {props.character.species}</p>
            </section>
        </section>)
    
}
export default CharacterDetail;