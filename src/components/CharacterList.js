import CharacterItem from "./CharacterItem";
function characterList(props){

    const elements = props.dataList.map((element, index)=>{
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