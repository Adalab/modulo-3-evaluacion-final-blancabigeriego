import FilterByName from "./FilterByName";


function Filters(props){
    return(
        <FilterByName dataList={props.dataList} handleInputName={props.handleInputName}/>
        // <FilterByHouse />

    )

}

export default Filters;

