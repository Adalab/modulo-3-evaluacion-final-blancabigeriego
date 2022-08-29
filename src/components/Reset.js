function Reset (props){


    const handleClick = (ev)=>{
        ev.preventDefault();
        props.handleReset();
    }
    return(
        <section>
            <button onClick={handleClick}><i class="fa-solid fa-wand-sparkles"></i>Abracadabra!</button>

        </section>
    )
}
export default Reset;