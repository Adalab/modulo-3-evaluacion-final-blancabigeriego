function FilterByName (props){

    const handleChange= (ev)=>{
        props.handleInputName(ev.target.value)
    };
    const handleEnter=(ev)=>{
        
        if (ev.keyCode === 13){
            ev.preventDefault()
        }
    };
    return(

        <form>
            <label name="name">Buscar por personaje:</label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                value={props.dataList.name}
                onChange={handleChange}
                onKeyDown={handleEnter}
             ></input>
        </form>
    )
}
export default FilterByName;