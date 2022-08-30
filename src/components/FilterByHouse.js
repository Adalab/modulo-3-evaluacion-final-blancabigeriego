import '../styles/layout/FilterByHouse.scss';

function FilterByHouse(props){

    
    const handleChange =(ev)=>{
        props.handleHouseSelect(ev.target.value);
    }
    return(
        <section className='house'>
            <label className="house__label"htmlFor="house">Selecciona la casa </label>
            <select 
            className="house__select"
            name="house" 
            id="house" 
            value={props.filteredHouse} 
            onChange={handleChange}>
                
                <option value="Gryffindor">Gryffindor</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ranvenclaw</option>
                <option value="Slytherin">Slytherin</option>
                <option value="">Sin casa</option>
            </select>
        </section>
    )
};
export default FilterByHouse;