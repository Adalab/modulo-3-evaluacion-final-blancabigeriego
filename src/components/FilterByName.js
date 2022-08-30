import Ls from "../services/ls";
import '../styles/layout/FilterByName.scss';
import PropTypes from 'prop-types';
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

        <form className="form">
            <label className="form__label" name="name">Buscar por personaje</label>
            <input 
                className="form__input"
                type="text" 
                id="name" 
                name="name" 
                value={Ls.get("name",props.filteredName)}
                onChange={handleChange}
                onKeyDown={handleEnter}
             ></input>
        </form>
    )

   
}

FilterByName.propTypes ={
   filteredName : PropTypes.string,
}


export default FilterByName;