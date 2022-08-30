import '../styles/layout/FilterBySpecies.scss';
import PropTypes from 'prop-types';

function FilterBySpecies(props){


    const handleChange =(ev)=>{
        props.handleSelect(ev.target.value)
        console.log(ev.target.value)
    }
    return(
        <section className='species'>
        <label 
        className="species__label"
        htmlFor="species" 
        id="species">Busca por especie</label>
        <select 
        className="species__select"
        name="species"
        id="species"
        value={props.filteredSpecies}
        onChange={handleChange}>
            <option value="human">Humano</option>
            <option value="half-giant">Medio-gigante</option>
            <option value="werewolf">Hombre-lobo</option>
            <option value="cat">Gato</option>
            <option value="goblin">Duende</option>
            <option value="owl">Lechuza</option>
            <option value="ghost">Fantasma</option>
            <option value="poltergeist">Poltergeist</option>
            <option value="three-headed dog">Perro de tres cabezas</option>
            <option value="dragon">Dragon</option>
            <option value="centaur">Centauro</option>
            <option value="house-elf">Elfo doméstico</option>
            <option value="acromantula">Acromántula</option>
            <option value="hippogriff">Hipogrifo</option>
            <option value="giant">Gigante</option>
            <option value="vampire">Vampiro</option>
            <option value="half-human">Medio-Humano</option>
        </select>
            
        </section>
    )
}

FilterBySpecies.propTypes ={
    filteredSpecies: PropTypes.string.isRequired,
}

export default FilterBySpecies;

