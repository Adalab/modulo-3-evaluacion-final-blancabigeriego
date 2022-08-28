import '../styles/layout/CharacterDetail.scss';


function CharacterDetail (props){
    const getAltName=()=>{
        if(props.character.altname.length !== 0){
            return <p>{`Alternative names: ${props.character.altname}`}</p>
        }
    };


    return(
        <section className='detail'>
            <img 
            className='detail__img'
            src={props.character.image}
            alt={`Foto de ${props.character.name}`}
            title={`Foto de ${props.character.name}`}/>
            <section className='detail__section'>
                <h2 className='detail__section--name'>Nombre:{props.character.name}</h2>
                <p className='detail__section--species'>
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