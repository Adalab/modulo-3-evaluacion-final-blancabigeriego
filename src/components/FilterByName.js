function FilterByName (props){

    const handleChange= (ev)=>{
        props.handleInputName(ev.target.value)
    };
    return(

        <form>
            <label name="name">Buscar por personaje:</label>
            <input type="text" id="name" name="name" onChange={handleChange}></input>
        </form>
    )
}
export default FilterByName;