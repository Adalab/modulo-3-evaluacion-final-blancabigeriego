import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
import FilterBySpecies from "./FilterBySpecies";


function Filters(props){
    return(
        <>
            <FilterByName dataList={props.dataList} handleInputName={props.handleInputName} filteredName={props.filteredName}/>
            <FilterByHouse filteredHouse={props.filteredHouse} handleHouseSelect={props.handleHouseSelect} />
            <FilterBySpecies 
            datalist={props.dataList} filteredSpecies={props.filteredSpecies}
            handleSelect={props.handleSelect}></FilterBySpecies>
        </>
    )

}

export default Filters;

