import CharacterItem from "./CharacterItem";
import '../styles/layout/CharacterList.scss';


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
        <section classname= "list">
            <ul className="list__ul">
               {elements} 
              
            </ul>
        </section>
    )
}
export default characterList;