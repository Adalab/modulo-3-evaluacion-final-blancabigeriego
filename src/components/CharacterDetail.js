function CharacterDetail (props){
    const getAltName=()=>{
        if(props.character.altname.length !== 0){
            return <p>{`Alternative names: ${props.character.altname}`}</p>
        }
    };


    return(
        <section>
            <img 
            src={props.character.image}
            alt={`Foto de ${props.character.name}`}
            title={`Foto de ${props.character.name}`}/>
            <section>
                <h2>Nombre:{props.character.name}</h2>
                <p>
                    Especie: {props.character.species}<br/>
                    Estatus: {props.character.alive}<br/>
                    Género: {props.character.gender}<br/>
                    Casa: {props.character.house}
                    {getAltName()}
                </p>

            </section>
        </section>)
    
}
export default CharacterDetail;