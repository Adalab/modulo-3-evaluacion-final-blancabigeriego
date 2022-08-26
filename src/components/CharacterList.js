import CharacterItem from "./CharacterItem";
function characterList(props){

    const elements = props.dataList
    .filter((element, index)=>{
        return(
            element.name.toLowerCase().includes(props.filteredName.toLowerCase())
        );
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