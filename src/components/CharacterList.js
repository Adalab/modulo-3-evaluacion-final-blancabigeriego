import CharacterItem from "./CharacterItem";
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
           <CharacterItem  element={element} key={index}/> 
        )
    })
    return(
        <section>
            <ul>
               {elements} 
            </ul>
        </section>
    )
}
export default characterList;