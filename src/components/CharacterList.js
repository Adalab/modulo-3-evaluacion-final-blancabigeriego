import CharacterItem from "./CharacterItem";
import '../styles/layout/CharacterList.scss';
import error from "../images/error.jpg";



function characterList(props){
    
    const elements = props.dataList
   
    
    .filter((element)=>{
        return(
            element.name.toLowerCase().includes(props.filteredName.toLowerCase())
        );
        
    })
    
    .filter((element)=>{
        return element.house === props.filteredHouse;
    })

    
    .map((element, index)=>{
        
        
        return(
            
            <CharacterItem  
            element={element} 
            key={index} 
            filteredName={props.filteredName}/> 
            
          )

       
         
    })
    


    return(
        <section>
            {elements.length === 0? <p className="error">No se encuentra ningún personaje que coincida con {props.filteredName}<img alt="deatheater" src={error} className="error__img" /></p> :<ul>
               {elements} 
              
            </ul>}
            
        </section>
    )
}
export default characterList;