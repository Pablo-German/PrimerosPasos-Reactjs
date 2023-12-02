


function Intrucciones (title, steps) {
    return ( 
        <section>
        <h3>{title}</h3>
        {steps.map((x,idx) => (
        <p key={idx}>{x}</p>
            
        ))}
    </section>
     );
}

export default Intrucciones;