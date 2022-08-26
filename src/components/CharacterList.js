function characterList(props){

    const elements = props.dataList.map((element, index)=>{
        return(
        <li key={index}>
            <a href="#">
                <img 
                src={element.image}
                alt={`Foto de ${element.name}`}
                title={`Foto de ${element.name}`}/>
                <section>
                    <h2>Nombre:{element.name}</h2>
                    <p>Especie: {element.species}</p>
                </section>
                
            </a>
        </li>)
    })
    return(
        <section>
            <ul>
               {elements} 
            </ul>
        </section>
    )
}
export default characterList;