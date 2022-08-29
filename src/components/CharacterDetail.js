import '../styles/layout/CharacterDetail.scss';
import gry from '../images/gryffindor.png';
import huff from '../images/hufflepuff.png';
import rav from '../images/ravenclaw.png';
import sly from '../images/slytherin.png';



function CharacterDetail (props){
    const getAltName=()=>{
        if(props.character.altname.length !== 0){
            return <p>{`Alternative names: ${props.character.altname}`}</p>
        }
    };

    const getAliveIcon =(props)=>{

        const alive= <i className="fa-solid fa-heart-pulse"></i>;
        const dead= <i className="fa-solid fa-skull-crossbones"></i>;
        if(props.character.alive === "Alive"){
            return alive;
        }else{
            return dead;
        }
        
    }

    const getHouseIcon = (props)=>{
        
        if(props.character.house === "Gryffindor"){
            return <img className="icon"src={gry} alt="Gryffindor icon"/>
        }
        else if(props.character.house === "Hufflepuff"){
            return <img className="icon" src={huff} alt="Hufflepuff icon"/>
        }
        else if(props.character.house === "Ravenclaw"){
            return <img className="icon" src={rav} alt="Ravenclaw icon"/>
        }
        else if(props.character.house === "Slytherin"){
            return <img className="icon" src={sly} alt="Slytherin icon"/>
        
    }
}


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
                    Especie: {props.character.species}
                </p>
                <p className='detail__section--alive'>
                    <span>Estatus: {props.character.alive}</span>
                    <span>{getAliveIcon(props)}</span>
                </p>
                <p className='detail__section--species'>
                    Género: {props.character.gender}
                </p>
                <p className='detail__section--species'>
                    Casa: {props.character.house !== ""? props.character.house : "Sin casa"}
                    {getHouseIcon(props)}
                    
                </p>
                {getAltName()}

            </section>
        </section>)
    
}
export default CharacterDetail;