import '../styles/layout/Reset.scss'

function Reset (props){


    const handleClick = (ev)=>{
        ev.preventDefault();
        props.handleReset(ev);
    }
    return(
        <section className='reset'>
            <button 
            className='reset__button'
            onClick={handleClick}><i className="fa-solid fa-wand-sparkles reset__button--icon"></i>Obliviate!</button>

        </section>
    )
}
export default Reset;