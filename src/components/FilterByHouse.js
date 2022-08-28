

function FilterByHouse(props){

    
    const handleChange =(ev)=>{
        props.handleHouseSelect(ev.target.value);
    }
    return(
        <>
            <label htmlFor="house">Selecciona la casa:</label>
            <select name="house" id="house" value={props.FilterByHouse} onChange={handleChange}>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ranvenclaw</option>
                <option value="Slytherin">Slytherin</option>
            </select>
        </>
    )
};
export default FilterByHouse;