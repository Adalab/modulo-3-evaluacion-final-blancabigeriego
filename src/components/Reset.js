function Reset (props){


    const handleClick = (ev)=>{
        ev.preventDefault();
        props.handleReset(ev);
    }
    return(
        <section>
            <button onClick={handleClick}><i className="fa-solid fa-wand-sparkles"></i>Abracadabra!</button>

        </section>
    )
}
export default Reset;