import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";


function Filters(props){
    return(
        <>
            <FilterByName dataList={props.dataList} handleInputName={props.handleInputName}/>
            <FilterByHouse filteredHouse={props.filteredHouse} handleHouseSelect={props.handleHouseSelect} />
        </>
    )

}

export default Filters;

