import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
import FilterBySpecies from "./FilterBySpecies";
import PropTypes from 'prop-types';


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

Filters.propTypes ={
    dataList: PropTypes.array.isRequired,
    filteredName: PropTypes.string.isRequired,
    handleInputName: PropTypes.func.isRequired,
    filteredHouse: PropTypes.string.isRequired,
    handleHouseSelect: PropTypes.func.isRequired,
    filteredSpecies: PropTypes.string.isRequired,
    handleSelect: PropTypes.func.isRequired,
}

export default Filters;

