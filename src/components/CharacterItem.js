import {Link} from 'react-router-dom';
import '../styles/layout/CharacterItem.scss';

function CharacterItem(props){
  

    
    
   const handleError=()=>{
    const html =( <li >
        <Link className="li" to={`/character/${props.element.id}`}>
           
            <img 
            className='li__img'
            src={props.element.image}
            alt={`Foto de ${props.element.name}`}
            title={`Foto de ${props.element.name}`}/>
            <section className='li__section'>
                <h2 className='li__section--name'>Nombre:{props.element.name}</h2>
                <p className='li__section--species'>Especie: {props.element.species}</p>
            </section>
            
            </Link>

    </li>)
     const error =<p>noooooo</p>

    if(props.element.name.toLowerCase() !== ""){
        
        return html
    }else{
        
        return error}
        
};
   

    return(
       handleError()
    );
   
};
export default CharacterItem;