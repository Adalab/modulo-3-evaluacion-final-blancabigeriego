import {Link} from 'react-router-dom';

function CharacterItem(props){
  

    
    
   const handleError=()=>{
    const html =( <li >
        <Link to={`/character/${props.element.id}`}>
           
            <img 
            src={props.element.image}
            alt={`Foto de ${props.element.name}`}
            title={`Foto de ${props.element.name}`}/>
            <section>
                <h2>Nombre:{props.element.name}</h2>
                <p>Especie: {props.element.species}</p>
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