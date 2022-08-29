import '../styles/layout/FilterBySpecies.scss';

function FilterBySpecies(props){


    const handleChange =(ev)=>{
        props.handleSelect(ev.target.value)
        console.log(ev.target.value)
    }
    return(
        <>
        <label 
        className="label-species"
        htmlFor="species" 
        id="species">Busca por especie</label>
        <select 
        className="select-species"
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
            
        </>
    )
}

export default FilterBySpecies;

//  0: “human”
// 1: “half-giant”
// 2: “werewolf”
// 3: “cat”
// 4: “goblin”
// 5: “owl”
// 6: “ghost”
// 7: “poltergeist”
// 8: “three-headed dog”
// 9: “dragon”
// 10: “centaur”
// 11: “house-elf”
// 12: “acromantula”
// 13: “hippogriff”
// 14: “giant”
// 15: “vampire”
// 16: “half-human”