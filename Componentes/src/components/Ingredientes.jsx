
function Ingredientes(title,ingre) {
    
    return ( 
        <section>
        <h2>{title}</h2>
        <ul>
        {ingre.map((ing,idx)=>(
            <li key={idx}>{ing.name} - {ing.amount} {ing.measurement}</li>
        ))}
        </ul>
        
    </section>
     );
}

export default Ingredientes;